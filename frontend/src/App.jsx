import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navber from "./components/navber/Navber"
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import About from './pages/About/About'
import Register from './pages/register/Register'

function App() {
  return (
    <div>
      <Navber/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
