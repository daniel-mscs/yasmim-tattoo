import { useState, useEffect } from 'react'
import styles from './CookieBanner.module.css'

export default function CookieBanner() {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const aceito = localStorage.getItem('cookies-aceito')
    if (!aceito) setVisivel(true)
  }, [])

  function aceitar() {
    localStorage.setItem('cookies-aceito', 'true')
    setVisivel(false)
  }

  if (!visivel) return null

  return (
    <div className={styles.banner}>
      <p className={styles.texto}>
        Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando,
        você concorda com nossa{' '}
        <a href="/privacidade" className={styles.link}>Política de Privacidade</a>.
      </p>
      <button className={styles.btn} onClick={aceitar}>
        Aceitar
      </button>
    </div>
  )
}