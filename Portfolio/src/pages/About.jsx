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
        <div className='bg-gray-600 h-[400px] p-3 max-w-[500px] flex-initial'>
            <h1 className='text-[#202113] text-2xl font-semibold '>Isutsa: A coffee powered web development enthusiast</h1>
            <p className='text-[#899921] font-bold text-lg'>Home: <span className='font-normal'>Nairobi, Kenya</span></p>
            <p className='text-[#899921] font-bold text-lg'>Home: <span className='font-normal'>Nairobi, Kenya</span></p>
            <p className='text-[#899921] font-bold text-lg'>My Why: <span className='font-normal'>My Family</span></p>
            <p className='text-[#899921] font-bold text-lg'>Home: <span className='font-normal'>Nairobi, Kenya</span></p>
            <p className='text-[#899921] font-bold text-lg'>Home: <span className='font-normal'>Nairobi, Kenya</span></p>
            <p className='text-[#899921] font-bold text-lg'>Home: <span className='font-normal'>Nairobi, Kenya</span></p>
            <p className='text-[#899921] font-bold text-lg'>Home: <span className='font-normal'>Nairobi, Kenya</span></p>
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
