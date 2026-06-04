import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../lib/firebase'
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function handleLogin(e) {
    e.preventDefault()
    setErro('')
    setCarregando(true)
    try {
      await signInWithEmailAndPassword(auth, email, senha)
    } catch {
      setErro('Email ou senha incorretos.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <h1 className={styles.logo}>Yasmim</h1>
        <p className={styles.sub}>Painel Administrativo</p>

        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.campo}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className={styles.campo}>
            <label>Senha</label>
            <input
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          {erro && <p className={styles.erro}>{erro}</p>}

          <button type="submit" className={styles.btn} disabled={carregando}>
            {carregando ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}