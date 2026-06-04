import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const navigate = useNavigate()
  const cliques = useRef(0)
  const timer = useRef(null)

  function handleLogoClick() {
    cliques.current += 1
    clearTimeout(timer.current)
    timer.current = setTimeout(() => { cliques.current = 0 }, 600)
    if (cliques.current >= 3) {
      cliques.current = 0
      navigate('/admin')
    }
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <span
              onClick={handleLogoClick}
              className={styles.logo}
            >
              Yasmim
            </span>
            <p className={styles.tagline}>Arte na pele.<br />Tradição que permanece.</p>
          </div>

          <div className={styles.col}>
            <h4>Navegação</h4>
            <ul>
              <li><a href="#portfolio">Portfólio</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#estilos">Estilos</a></li>
              <li><a href="#cta">Agendar</a></li>
              <li><a href="/privacidade">Privacidade</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Contato</h4>
            <a href="https://wa.me/5555992201925" target="_blank" rel="noopener noreferrer">(55) 99220-1925</a>
            <a href="https://www.instagram.com/yasmimlc.ink/" target="_blank" rel="noopener noreferrer">@yasmimlc.ink</a>
            <span>Santa Maria, RS — Brasil</span>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 <span>Yasmim</span> — Todos os direitos reservados.</p>
          <p>Tatuagens são permanentes. +18 anos ou responsável.</p>
        </div>
      </div>
    </footer>
  )
}