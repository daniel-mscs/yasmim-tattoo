import { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../lib/firebase'
import styles from './TatuagemCard.module.css'

export default function TatuagemCard({ tatuagem, index, total, onDeletar, onSubir, onDescer, onAtualizar }) {
  const [fotoAtual, setFotoAtual] = useState(0)
  const fotos = tatuagem.fotos || []

  async function removerFoto(i) {
    if (fotos.length === 1) {
      if (!confirm('Essa é a única foto. Deletar a tatuagem inteira?')) return
      onDeletar()
      return
    }
    const novas = fotos.filter((_, idx) => idx !== i)
    await updateDoc(doc(db, 'tatuagens', tatuagem.id), { fotos: novas })
    setFotoAtual(0)
    onAtualizar()
  }

  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        {fotos.length > 0 ? (
          <img src={fotos[fotoAtual]} alt={`Tatuagem ${index + 1}`} className={styles.img} />
        ) : (
          <div className={styles.semFoto}>Sem foto</div>
        )}

        {fotos.length > 1 && (
          <div className={styles.miniaturas}>
            {fotos.map((f, i) => (
              <button
                key={i}
                className={`${styles.miniatura} ${i === fotoAtual ? styles.miniaturaAtiva : ''}`}
                onClick={() => setFotoAtual(i)}
              >
                <img src={f} alt="" />
              </button>
            ))}
          </div>
        )}

        <div className={styles.badges}>
          <span className={styles.badge}>{fotos.length} foto{fotos.length !== 1 ? 's' : ''}</span>
          {fotoAtual === 0 && <span className={styles.badgeCapa}>Capa</span>}
        </div>
      </div>

      <div className={styles.acoes}>
        <div className={styles.ordem}>
          <button
            className={styles.btnOrdem}
            onClick={onSubir}
            disabled={index === 0}
            title="Mover para cima"
          >
            ↑
          </button>
          <span className={styles.posicao}>{index + 1}</span>
          <button
            className={styles.btnOrdem}
            onClick={onDescer}
            disabled={index === total - 1}
            title="Mover para baixo"
          >
            ↓
          </button>
        </div>

        <div className={styles.acoesDir}>
          {fotoAtual > 0 && (
            <button
              className={styles.btnRemoverFoto}
              onClick={() => removerFoto(fotoAtual)}
              title="Remover esta foto"
            >
              Remover foto
            </button>
          )}
          <button
            className={styles.btnDeletar}
            onClick={onDeletar}
            title="Deletar tatuagem"
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  )
}