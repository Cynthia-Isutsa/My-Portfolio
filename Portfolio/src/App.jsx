import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Work from './pages/Work'
import About from './pages/About'


const App = () => {
  return (
    <div className='bg-black'>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/work' element ={<Work />} />
        <Route path='/about' element = {<About />} />
      </Routes>
    </div>
  )
}

export default App
