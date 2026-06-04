import { useEffect, useRef } from 'react'
import styles from './PortfolioCard.module.css'

export default function PortfolioCard({ tatuagem, index, onClick }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => ref.current?.classList.add(styles.visible), index * 80)
          observer.unobserve(ref.current)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [index])

  const capa = tatuagem.fotos?.[0]

  return (
    <div
      className={styles.card}
      ref={ref}
      onClick={onClick}
    >
      {capa ? (
        <img src={capa} alt={`Tatuagem ${index + 1}`} className={styles.img} />
      ) : (
        <div className={styles.placeholder}>
          <span className={styles.num}>{index + 1}</span>
        </div>
      )}

      <div className={styles.overlay}>
        <span className={styles.overlayText}>Ver fotos</span>
        {tatuagem.fotos?.length > 1 && (
          <span className={styles.count}>+{tatuagem.fotos.length} fotos</span>
        )}
      </div>
    </div>
  )
}