import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
const App = () => {
  return (
    <section>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </section>
  )
}

export default App
