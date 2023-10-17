import React from 'react'
import { Navbar1 } from '../components'
import work1 from '../assets/work1.png'

const Work = () => {
  return (
    <div className='bg-black/90'>
     <Navbar1 />
      <div className='bg-[#0D0D0D] h-[150px]'>
          <h1 className = 'text-[#FAFBE9] text-4xl text-center pt-10 italic'>Work</h1>
      </div>
      <div className=' m-10  flex md:flex-row flex-col flex-1 justify-center items-center gap-4'>
        <div className='flex-1'>
          <img src={work1} alt='project1' />
        </div>
        <div className='flex-1'>
          <h1 className='text-[#899921] text-4xl font-semibold'>Blog Site</h1>
          <p className='text-lg text-gray-400'>A blog done in Nextjs Tailwind and typescript. The backend was done using
          Strapi, a headless CMS. </p>
        </div>
      </div>
    </div>
  )
}

export default Work
