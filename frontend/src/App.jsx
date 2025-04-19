import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navber from "./components/navber/Navber"
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import About from './pages/About/About'
import Register from './pages/register/Register'
import Favourity from './pages/favourite/Favourity'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div>
        <Navber/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/favourites' element={<Favourity/>}/>
          <Route path='/favourites/:userId' element={<Favourity/>}/>
        </Routes>
        <Footer/>
      </div>
    </AuthProvider>
  )
}

export default App
