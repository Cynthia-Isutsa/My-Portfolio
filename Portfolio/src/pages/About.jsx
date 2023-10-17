import React from 'react'
import { Navbar1 } from '../components'
import pic from '../assets/pic.png'
import Resume from './Resume'

const About = () => {
  return (
    <div>
      <Navbar1 />
      <div className='bg-[#0D0D0D] h-[150px]'>
          <h1 className = 'text-[#FAFBE9] text-4xl text-center pt-10 italic'>Get to know me!!!</h1>
      </div>
      <div className='flex flex-1 flex-row md:gap-8 justify-between items-center mx-8 md:mx-20 my-10'>
        <div className='bg-gray-500 z-0'>
            <img src ={pic} alt = 'image' className='z-10 shadow-xl shadow-gray-400' />
        </div>
        <div className='bg-gray-400 h-[400px] p-3 max-w-[500px] flex-initial'>
            <h1 className='text-black text-3xl font-bold mb-4'>Isutsa: A coffee powered web development enthusiast</h1>
            <p className='text-[#0D0D0D] font-bold text-xl mb-2'>Home: <span className='font-normal'>Nairobi, Kenya</span></p>
            <p className='text-[#0D0D0D] font-bold text-xl mb-2'>My Why: <span className='font-normal'>My Family, young brother Austine</span></p>
            <p className='text-[#0D0D0D] font-bold text-xl mb-2'>Favourite frameworks: <span className='font-normal'>React, Django</span></p>
            <p className='text-[#0D0D0D] font-bold text-xl mb-2'>First Degree: <span className='font-normal'>Bcorm(Accounts)</span></p>
            <p className='text-[#0D0D0D] font-bold text-xl mb-2'>Quote: <span className='font-normal'>Consistency is the last refuge for the unimaginative. Oscar Wilde.</span></p>
            <p className='text-[#0D0D0D] font-bold text-xl mb-2'>Hobby: <span className='font-normal'>Being a nerd with my favourite book.</span></p>
        </div>
      </div>
      <Resume />
      <div className='bg-[#0D0D0D] h-[200px] flex flex-col items-center justify-center'>
          <h1 className = 'text-[#FAFBE9] text-4xl md:text-7xl mb-7 text-center italic'>Wanna Chat??</h1>
          <button><a href='/contact' value='button' className='bg-[#899921] text-black mt-6 mb-6 px-8 py-2 font-semibold
          text-lg text-center cursor-pointer hover:scale-110 ease-in duration-200'>Send Message</a></button>
      </div>
    </div>
  )
}

export default About
