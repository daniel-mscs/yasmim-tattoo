import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : ''
  }, [menuAberto])

  const fecharMenu = () => setMenuAberto(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.logo}>Yasmim</a>
        <ul className={styles.links}>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#estilos">Estilos</a></li>
          <li><a href="#cta" className={styles.cta}>Agendar</a></li>
        </ul>
        <button
          className={`${styles.hamburger} ${menuAberto ? styles.open : ''}`}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${menuAberto ? styles.mobileOpen : ''}`}>
        <a href="#portfolio" onClick={fecharMenu}>Portfólio</a>
        <a href="#sobre" onClick={fecharMenu}>Sobre</a>
        <a href="#estilos" onClick={fecharMenu}>Estilos</a>
        <a href="#cta" onClick={fecharMenu}>Agendar</a>
      </div>
    </>
  )
}