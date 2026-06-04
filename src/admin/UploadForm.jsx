import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { uploadImagem } from '../lib/cloudinary'
import styles from './UploadForm.module.css'

export default function UploadForm({ onFechar, onSalvo, totalAtual }) {
  const [arquivos, setArquivos] = useState([])
  const [previews, setPreviews] = useState([])
  const [progresso, setProgresso] = useState('')
  const [carregando, setCarregando] = useState(false)

  function handleArquivos(e) {
    const selecionados = Array.from(e.target.files)
    setArquivos(selecionados)
    setPreviews(selecionados.map(f => URL.createObjectURL(f)))
  }

  function removerFoto(index) {
    setArquivos(prev => prev.filter((_, i) => i !== index))
    setPreviews(prev => prev.filter((_, i) => i !== index))
  }

  async function handleSalvar() {
    if (arquivos.length === 0) return
    setCarregando(true)

    try {
      const urls = []
      for (let i = 0; i < arquivos.length; i++) {
        setProgresso(`Enviando foto ${i + 1} de ${arquivos.length}...`)
        const url = await uploadImagem(arquivos[i])
        urls.push(url)
      }

      setProgresso('Salvando...')
      await addDoc(collection(db, 'tatuagens'), {
        fotos: urls,
        ordem: totalAtual,
        created_at: new Date()
      })

      onSalvo()
    } catch (err) {
      console.error(err)
      setProgresso('Erro ao salvar. Tente novamente.')
      setCarregando(false)
    }
  }

  return (
    <div className={styles.backdrop} onClick={!carregando ? onFechar : undefined}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitulo}>Nova Tatuagem</h2>
          {!carregando && (
            <button className={styles.fechar} onClick={onFechar}>✕</button>
          )}
        </div>

        {previews.length === 0 ? (
          <label className={styles.dropzone}>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleArquivos}
              className={styles.inputHidden}
            />
            <span className={styles.dropIcon}>+</span>
            <span className={styles.dropTexto}>Clique para selecionar fotos</span>
            <span className={styles.dropSub}>Selecione uma ou mais fotos desta tatuagem</span>
          </label>
        ) : (
          <div className={styles.previewGrid}>
            {previews.map((src, i) => (
              <div key={i} className={styles.previewItem}>
                <img src={src} alt={`Preview ${i + 1}`} className={styles.previewImg} />
                {!carregando && (
                  <button
                    className={styles.remover}
                    onClick={() => removerFoto(i)}
                  >
                    ✕
                  </button>
                )}
                {i === 0 && <span className={styles.capa}>Capa</span>}
              </div>
            ))}
            {!carregando && (
              <label className={styles.addMais}>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={e => {
                    const novos = Array.from(e.target.files)
                    setArquivos(prev => [...prev, ...novos])
                    setPreviews(prev => [...prev, ...novos.map(f => URL.createObjectURL(f))])
                  }}
                  className={styles.inputHidden}
                />
                <span>+ Adicionar mais</span>
              </label>
            )}
          </div>
        )}

        {progresso && (
          <p className={styles.progresso}>{progresso}</p>
        )}

        <div className={styles.acoes}>
          {!carregando && (
            <button className={styles.btnCancelar} onClick={onFechar}>
              Cancelar
            </button>
          )}
          <button
            className={styles.btnSalvar}
            onClick={handleSalvar}
            disabled={carregando || arquivos.length === 0}
          >
            {carregando ? progresso : `Salvar ${arquivos.length > 0 ? `(${arquivos.length} foto${arquivos.length > 1 ? 's' : ''})` : ''}`}
          </button>
        </div>
      </div>
    </div>
  )
}