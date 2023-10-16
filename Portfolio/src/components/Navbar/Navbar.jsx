import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className ='flex justify-between items-end mx-16'>

      <div>
        <h1 className='text-5xl font-bold text-[#0096A9] italic'>cin</h1>
      </div>
      <ul className='hidden md:flex md:gap-20 xl:gap-28 gap-5 mt-7'>
          <li className='font-semibold text-[#b9af88] cursor-pointer hover:text-[#0096A9] hover:scale-110 ease-in duration-200'><a href='#main'>Home</a></li>
          <li className='font-semibold text-[#b9af88] cursor-pointer hover:text-[#0096A9] hover:scale-110 ease-in duration-200'><a href='#projects'>Projects</a></li>
          <li className='font-semibold text-[#b9af88] cursor-pointer hover:text-[#0096A9] hover:scale-110 ease-in duration-200'><a href='#skills'>Skills</a></li>
          <li className='font-semibold text-[#b9af88] cursor-pointer hover:text-[#0096A9] hover:scale-110 ease-in duration-200'><a href='#contact'>ContactUs</a></li>
      </ul>

        <AiOutlineMenu size={27} className='md:hidden text-[#b9af88]'/>

      </div>

  )
}

export default Navbar