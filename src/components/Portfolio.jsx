import { useEffect, useState } from 'react'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../lib/firebase'
import PortfolioCard from './PortfolioCard'
import Lightbox from './Lightbox'
import styles from './Portfolio.module.css'

export default function Portfolio() {
  const [tatuagens, setTatuagens] = useState([])
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    async function carregar() {
      const q = query(collection(db, 'tatuagens'), orderBy('ordem', 'asc'))
      const snap = await getDocs(q)
      setTatuagens(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    }
    carregar()
  }, [])

  return (
    <section id="portfolio" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-label">Trabalhos Recentes</span>
          <h2 className="section-title">O <em>Portfólio</em></h2>
          <div className="divider-line" />
        </div>

        {tatuagens.length === 0 ? (
          <p className={styles.vazio}>Nenhum trabalho publicado ainda.</p>
        ) : (
          <div className={styles.grid}>
            {tatuagens.map((t, i) => (
              <PortfolioCard
                key={t.id}
                tatuagem={t}
                index={i}
                onClick={() => setLightbox(t)}
              />
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <Lightbox
          tatuagem={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}