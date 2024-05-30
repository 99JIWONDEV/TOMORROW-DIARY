import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Choose from './pages/Choose'
import Write from './pages/Write'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </>
  )
}

export default App
