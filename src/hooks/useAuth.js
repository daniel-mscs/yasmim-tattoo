import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebase'

export function useAuth() {
  const [usuario, setUsuario] = useState(undefined)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUsuario(u))
    return () => unsub()
  }, [])

  return { usuario, carregando: usuario === undefined }
}