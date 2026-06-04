import styles from './Sobre.module.css'
import { useReveal } from '../hooks/useReveal'

export default function Sobre() {
  const ref1 = useReveal()
  const ref2 = useReveal()

  return (
    <section id="sobre" className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.visual} ref={ref1}>
            <div className={styles.frame}>
              <div className={styles.frameInner}>
                <span className={styles.frameIcon}>Y</span>
                <span className={styles.frameLabel}>Yasmim — Tatuadora</span>
              </div>
            </div>
          </div>

          <div className={styles.texto} ref={ref2}>
            <span className="section-label">Sobre a Artista</span>
            <h2 className="section-title">Arte com <em>Alma</em></h2>
            <div className="divider-line" />

            <p>Apaixonada pela estética do <strong>Tradicional Europeu</strong> desde o início da sua jornada como tatuadora, Yasmim desenvolveu uma linguagem visual própria — onde o traço bold e os preenchimentos sólidos encontram iconografia medieval e simbolismos atemporais.</p>

            <p>Cada peça é pensada em conjunto com o cliente, respeitando o corpo como tela e a pele como registro permanente de identidade. O resultado é sempre algo <strong>único, intencional e duradouro.</strong></p>

            <p>Com atenção obsessiva aos detalhes e compromisso com a longevidade da arte, Yasmim acredita que uma boa tatuagem conta uma história sem precisar de uma palavra.</p>

            <div className={styles.stats}>
              <div>
                <span className={styles.statNum}>5+</span>
                <span className={styles.statLabel}>Anos de experiência</span>
              </div>
              <div>
                <span className={styles.statNum}>300+</span>
                <span className={styles.statLabel}>Peças realizadas</span>
              </div>
              <div>
                <span className={styles.statNum}>100%</span>
                <span className={styles.statLabel}>Arte autoral</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}