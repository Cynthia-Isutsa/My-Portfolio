import React from 'react'
import { Navbar, Main, Projects, Skills, Contact } from './components'
import './App.css'


const App = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <Main />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
