import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Admin from './pages/Admin.jsx'
import Privacidade from './pages/Privacidade.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/privacidade" element={<Privacidade />} />
    </Routes>
  )
}