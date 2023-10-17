import React, {useState} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className ='flex bg-black/70 justify-between items-end mx-16 my-5'>

      <div>
        <h1 className='text-5xl font-bold text-[#899921] italic'>cin</h1>
      </div>
      <ul className='hidden md:flex md:gap-20 xl:gap-28 gap-5 mt-7'>
          <li className='font-semibold text-[#fafbe9] cursor-pointer hover:text-[#899921]'><a href='/'>Home</a></li>
          <li className='font-semibold text-[#fafbe9] cursor-pointer hover:text-[#899921]'><a href='/about'>Resume</a></li>
          <li className='font-semibold text-[#fafbe9] cursor-pointer hover:text-[#899921]'><a href='/work'>Work</a></li>
          <li className='font-semibold text-[#fafbe9] cursor-pointer hover:text-[#899921]'><a href='/contact'>ContactUs</a></li>
      </ul>

      <div className='md:hidden'>
        <AiOutlineMenu size={27}  onClick= {() => setToggleMenu(true)} className='md:hidden text-[#b9af88]'/>
      
        {toggleMenu &&(
        <div className='fixed top-0 left-0 width-[100%] h-[100vh] bg-black transition ease-out duration-300 flex flex-row justify-center 
        items-center z-50 slide-bottom'>
          <AiOutlineClose size={27} onClick={()=> setToggleMenu(false)}
           className='fill-[#b9af88] cursor-pointer absolute top-[20px] right-[20px]' />
          <ul>
            <li className='m-8 cursor-pointer text-center text-xl text-[#fafbe9] hover:text-[#899921]'><a href='/'>Home</a></li>
            <li className='m-8 cursor-pointer text-center text-xl text-[#fafbe9] hover:text-[#899921]'><a href='/about'>Resume</a></li>
            <li className='m-8 cursor-pointer text-center text-xl text-[#fafbe9] hover:text-[#899921]'><a href='/work'>Work</a></li>
            <li className='m-8 cursor-pointer text-center text-xl text-[#fafbe9] hover:text-[#899921]'><a href='/contact'>ContactUs</a></li>
          </ul>
        </div>
        )}
      </div>

      </div>

  )
}

export default Navbar 