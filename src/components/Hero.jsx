import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll('[data-reveal]')
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add(styles.visible), i * 200)
    })
  }, [])

  return (
    <section id="hero" className={styles.hero} ref={sectionRef}>
      <div className={styles.bg} />
      <div className={styles.ornament} />

      <span className={styles.pre} data-reveal>
        Tatuagem Tradicional Europeia
      </span>

      <h1 className={styles.nome} data-reveal>Yasmim</h1>

      <div className={styles.divider} data-reveal />

      <p className={styles.sub} data-reveal>
        Arte na pele. Traço firme. Tradição que atravessa gerações.
      </p>

      <p className={styles.location} data-reveal>
        ✦ Santa Maria, RS — Brasil ✦
      </p>

      <div className={styles.btns} data-reveal>
        <a
          href="https://wa.me/5555992201925"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Agendar Sessão
        </a>
        <a href="#portfolio" className="btn-outline">
          Ver Portfólio
        </a>
      </div>
    </section>
  )
}