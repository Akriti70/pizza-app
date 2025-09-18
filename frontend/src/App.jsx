import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Menu from './pages/Menu'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-red-500 p-4 text-white text-xl font-bold">
        <Link to="/">Pizza App</Link>
      </header>

      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
    </div>
  )
}

export default App



