import React from 'react'
import { Navbar, Main, Projects, Skills, Contact, Footer } from './components'
import './App.css'


const App = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <Main />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
