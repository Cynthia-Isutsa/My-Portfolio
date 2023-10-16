import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className ='flex bg-black/70 justify-between items-end mx-16'>

      <div>
        <h1 className='text-5xl font-bold text-[#899921] italic'>cin</h1>
      </div>
      <ul className='hidden md:flex md:gap-20 xl:gap-28 gap-5 mt-7'>
          <li className='font-semibold text-[#fafbe9] cursor-pointer hover:text-[#899921]'><a href='/'>Home</a></li>
          <li className='font-semibold text-[#fafbe9] cursor-pointer hover:text-[#899921]'><a href='/about'>About</a></li>
          <li className='font-semibold text-[#fafbe9] cursor-pointer hover:text-[#899921]'><a href='/work'>Work</a></li>
          <li className='font-semibold text-[#fafbe9] cursor-pointer hover:text-[#899921]'><a href='/contact'>ContactUs</a></li>
      </ul>

        <AiOutlineMenu size={27} className='md:hidden text-[#b9af88]'/>

      </div>

  )
}

export default Navbar 