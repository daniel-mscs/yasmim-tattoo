import { useEffect, useState } from 'react'
import styles from './Lightbox.module.css'

export default function Lightbox({ tatuagem, onClose }) {
  const [atual, setAtual] = useState(0)
  const fotos = tatuagem.fotos || []

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setAtual(a => (a + 1) % fotos.length)
      if (e.key === 'ArrowLeft') setAtual(a => (a - 1 + fotos.length) % fotos.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [fotos.length, onClose])

  const anterior = () => setAtual(a => (a - 1 + fotos.length) % fotos.length)
  const proximo = () => setAtual(a => (a + 1) % fotos.length)

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.box} onClick={e => e.stopPropagation()}>

        <button className={styles.fechar} onClick={onClose}>✕</button>

        <div className={styles.imgWrap}>
          <img
            src={fotos[atual]}
            alt={`Foto ${atual + 1}`}
            className={styles.img}
          />
        </div>

        {fotos.length > 1 && (
          <>
            <button className={`${styles.nav} ${styles.navEsq}`} onClick={anterior}>‹</button>
            <button className={`${styles.nav} ${styles.navDir}`} onClick={proximo}>›</button>

            <div className={styles.dots}>
              {fotos.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === atual ? styles.dotAtivo : ''}`}
                  onClick={() => setAtual(i)}
                />
              ))}
            </div>

            <p className={styles.contador}>{atual + 1} / {fotos.length}</p>
          </>
        )}
      </div>
    </div>
  )
}