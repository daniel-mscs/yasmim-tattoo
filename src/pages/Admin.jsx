import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'
import Login from '../admin/Login.jsx'
import Dashboard from '../admin/Dashboard.jsx'

export default function Admin() {
  const { usuario, carregando } = useAuth()

  if (carregando) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#0a0808', color: '#e8d5c4' }}>
      Carregando...
    </div>
  )

  return (
    <Routes>
      <Route path="login" element={
        usuario ? <Navigate to="/admin" replace /> : <Login />
      } />
      <Route path="/" element={
        usuario ? <Dashboard /> : <Navigate to="/admin/login" replace />
      } />
    </Routes>
  )
}