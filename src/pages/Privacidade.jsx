import styles from './Privacidade.module.css'

export default function Privacidade() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <a href="/" className={styles.voltar}>← Voltar ao site</a>

        <h1 className={styles.titulo}>Política de Privacidade</h1>
        <p className={styles.atualizado}>Última atualização: junho de 2025</p>

        <div className={styles.conteudo}>

          <h2>1. Quem somos</h2>
          <p>
            Este site é de propriedade de <strong>Yasmim</strong>, tatuadora profissional
            com atuação em Santa Maria, RS, Brasil. O site tem como finalidade a divulgação
            do trabalho artístico e o contato com clientes para agendamentos.
          </p>

          <h2>2. Quais dados coletamos</h2>
          <p>Este site coleta apenas dados mínimos necessários para seu funcionamento:</p>
          <ul>
            <li><strong>Cookies de sessão:</strong> utilizados para melhorar a experiência de navegação.</li>
            <li><strong>Dados de contato:</strong> quando você nos contata pelo WhatsApp ou Instagram, os dados fornecidos são tratados pelas respectivas plataformas (Meta), sujeitos às políticas de privacidade delas.</li>
          </ul>
          <p>Não coletamos, armazenamos nem vendemos dados pessoais de visitantes.</p>

          <h2>3. Para que usamos os dados</h2>
          <ul>
            <li>Melhorar a experiência de navegação no site</li>
            <li>Responder a solicitações de agendamento</li>
            <li>Análise de desempenho do site (dados anônimos)</li>
          </ul>

          <h2>4. Cookies</h2>
          <p>
            Utilizamos cookies estritamente necessários para o funcionamento do site.
            Ao aceitar nossa política de cookies, você consente com o uso desses arquivos.
            Você pode desativar cookies nas configurações do seu navegador, porém isso
            pode afetar algumas funcionalidades do site.
          </p>

          <h2>5. Compartilhamento de dados</h2>
          <p>
            Não compartilhamos, vendemos ou transferimos seus dados pessoais a terceiros,
            exceto quando exigido por lei ou ordem judicial.
          </p>

          <h2>6. Seus direitos (LGPD)</h2>
          <p>
            De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
          </p>
          <ul>
            <li>Confirmar a existência de tratamento de dados</li>
            <li>Acessar seus dados</li>
            <li>Solicitar correção de dados incompletos ou incorretos</li>
            <li>Solicitar exclusão dos seus dados</li>
            <li>Revogar o consentimento a qualquer momento</li>
          </ul>
          <p>
            Para exercer esses direitos, entre em contato pelo WhatsApp:{' '}
            <a href="https://wa.me/5555992201925" target="_blank" rel="noopener noreferrer">
              (55) 99220-1925
            </a>
          </p>

          <h2>7. Links externos</h2>
          <p>
            Este site contém links para plataformas externas como WhatsApp e Instagram.
            Não nos responsabilizamos pelas práticas de privacidade dessas plataformas.
          </p>

          <h2>8. Alterações nesta política</h2>
          <p>
            Podemos atualizar esta política periodicamente. Recomendamos que você
            revise esta página ocasionalmente. Alterações significativas serão
            comunicadas de forma visível no site.
          </p>

          <h2>9. Contato</h2>
          <p>
            Dúvidas sobre esta política de privacidade? Entre em contato:
          </p>
          <ul>
            <li>WhatsApp: <a href="https://wa.me/5555992201925">(55) 99220-1925</a></li>
            <li>Instagram: <a href="https://www.instagram.com/yasmimlc.ink/" target="_blank" rel="noopener noreferrer">@yasmimlc.ink</a></li>
          </ul>

        </div>
      </div>
    </div>
  )
}