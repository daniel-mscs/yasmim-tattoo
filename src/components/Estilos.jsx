import styles from './Estilos.module.css'
import { useReveal } from '../hooks/useReveal'

const estilos = [
  { icon: '⚔️', nome: 'Tradicional Europeu', desc: 'Traço firme, paleta intensa e motivos clássicos como roses, serpentes, escudos e águias. A essência do estilo.' },
  { icon: '🌹', nome: 'Old School', desc: 'Contornos boldos, cores saturadas e motivos atemporais. A linguagem que fundou a tatuagem moderna.' },
  { icon: '🦅', nome: 'Neotradicional', desc: 'A riqueza do tradicional com profundidade moderna. Mais detalhe, mais dimensão, mesma personalidade.' },
  { icon: '🌑', nome: 'Black & Grey', desc: 'Sombreados suaves, transições precisas e composições com peso visual e emocional.' },
  { icon: '🌿', nome: 'Ornamental', desc: 'Padrões geométricos e florais que abraçam o corpo com precisão e elegância sombria.' },
  { icon: '💀', nome: 'Macabro & Dark', desc: 'Arte que explora o lado obscuro com beleza e respeito. Crânios, memento mori e iconografia gótica.' },
]

export default function Estilos() {
  const ref = useReveal()

  return (
    <section id="estilos" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Especialidades</span>
          <h2 className="section-title">Estilos que <em>Domino</em></h2>
          <div className="divider-line" style={{ margin: '0 auto 0' }} />
        </div>

        <div className={styles.grid} ref={ref}>
          {estilos.map((e) => (
            <div key={e.nome} className={styles.card}>
              <span className={styles.icon}>{e.icon}</span>
              <div className={styles.nome}>{e.nome}</div>
              <p className={styles.desc}>{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}