import { useEffect, useState } from 'react'
import { signOut } from 'firebase/auth'
import { collection, getDocs, orderBy, query, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../lib/firebase'
import UploadForm from './UploadForm'
import TatuagemCard from './TatuagemCard'
import styles from './Dashboard.module.css'

export default function Dashboard() {
  const [tatuagens, setTatuagens] = useState([])
  const [mostrarForm, setMostrarForm] = useState(false)
  const [carregando, setCarregando] = useState(true)

  async function carregar() {
    setCarregando(true)
    const q = query(collection(db, 'tatuagens'), orderBy('ordem', 'asc'))
    const snap = await getDocs(q)
    setTatuagens(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    setCarregando(false)
  }

  useEffect(() => { carregar() }, [])

  async function handleDeletar(id) {
    if (!confirm('Deletar esta tatuagem?')) return
    await deleteDoc(doc(db, 'tatuagens', id))
    carregar()
  }

  async function moverParaCima(index) {
    if (index === 0) return
    const lista = [...tatuagens]
    const temp = lista[index - 1].ordem
    await updateDoc(doc(db, 'tatuagens', lista[index].id), { ordem: temp })
    await updateDoc(doc(db, 'tatuagens', lista[index - 1].id), { ordem: lista[index].ordem })
    carregar()
  }

  async function moverParaBaixo(index) {
    if (index === tatuagens.length - 1) return
    const lista = [...tatuagens]
    const temp = lista[index + 1].ordem
    await updateDoc(doc(db, 'tatuagens', lista[index].id), { ordem: temp })
    await updateDoc(doc(db, 'tatuagens', lista[index + 1].id), { ordem: lista[index].ordem })
    carregar()
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.logo}>Yasmim</h1>
        <div className={styles.headerAcoes}>
          <button className={styles.btnNovo} onClick={() => setMostrarForm(true)}>
            + Nova Tatuagem
          </button>
          <button className={styles.btnSair} onClick={() => signOut(auth)}>
            Sair
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.topo}>
          <h2 className={styles.titulo}>Portfólio</h2>
          <p className={styles.contagem}>{tatuagens.length} trabalho{tatuagens.length !== 1 ? 's' : ''}</p>
        </div>

        {carregando ? (
          <p className={styles.msg}>Carregando...</p>
        ) : tatuagens.length === 0 ? (
          <p className={styles.msg}>Nenhuma tatuagem ainda. Clique em "Nova Tatuagem" para começar.</p>
        ) : (
          <div className={styles.grid}>
            {tatuagens.map((t, i) => (
              <TatuagemCard
                key={t.id}
                tatuagem={t}
                index={i}
                total={tatuagens.length}
                onDeletar={() => handleDeletar(t.id)}
                onSubir={() => moverParaCima(i)}
                onDescer={() => moverParaBaixo(i)}
                onAtualizar={carregar}
              />
            ))}
          </div>
        )}
      </main>

      {mostrarForm && (
        <UploadForm
          onFechar={() => setMostrarForm(false)}
          onSalvo={() => { setMostrarForm(false); carregar() }}
          totalAtual={tatuagens.length}
        />
      )}
    </div>
  )
}