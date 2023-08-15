import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  } 

  return (
    <div>
      <AiOutlineMenu onClick = {handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
      {
        nav ? (
          <div className ='fixed w-full h-screen bg-black/90 flex flex-col justify-center items-center z-20 '> 
            <a href= '#main' className = 'w-[75%] flex justify-center items-center rounded-full bg-[#CBB682] shadow-[#A08C5B] m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineHome size={20} className='fill-black-100' />
              <span className='pl-4 text-black-100'>Home</span>
            </a>
            <a href= '#main' className = 'w-[75%] flex justify-center items-center rounded-full bg-[#CBB682] shadow-[#A08C5B] m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <GrProjects size={20} className='fill-black-100' />
              <span className='pl-4 text-black-100'>Projects</span>
            </a>
            <a href= '#main' className = 'w-[75%] flex justify-center items-center rounded-full bg-[#CBB682] shadow-[#A08C5B] m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <BsPerson size={20} className='fill-black-100' />
              <span className='pl-4 text-black-100'>Skills</span>
            </a>
            <a href= '#main' className = 'w-[75%] flex justify-center items-center rounded-full bg-[#CBB682] shadow-[#A08C5B] m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail size={20} className='fill-black-100' />
              <span className='pl-4 text-black-100'>Get in Touch</span>
            </a>
          </div>
        ) 
        : (
          ''
        )}

        <div>
          <div></div>
        </div>
    </div>
  )
}

export default Navbar
