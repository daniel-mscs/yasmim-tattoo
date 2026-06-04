import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Portfolio from '../components/Portfolio.jsx'
import Sobre from '../components/Sobre.jsx'
import Estilos from '../components/Estilos.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'
import CookieBanner from '../components/CookieBanner.jsx'


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Sobre />
      <Estilos />
      <CTA />
      <Footer />
      <CookieBanner />
    </>
  )
}