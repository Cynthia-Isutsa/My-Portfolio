import React from 'react'
import { Navbar1 } from '../components'
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.jpg'

const Work = () => {
  return (
    <div className='bg-black/90'>
     <Navbar1 />
      <div className='bg-[#0D0D0D] h-[150px]'>
          <h1 className = 'text-[#FAFBE9] text-4xl text-center pt-10 italic'>Work</h1>
      </div>

      <div className=' mx-10 my-20 flex md:flex-row flex-col flex-1 justify-center items-center gap-8'>
          <div className='flex-1'>
            <h1 className='text-[#899921] text-4xl font-semibold mb-4'>Maganji.co</h1>
            <p className='text-lg text-gray-400'>Maganji.co is a personal finance application built in react, tailwind and django. The frontend is a dashbord
            meant to do an analysis of an individual personal finances including budgeting, allocating funds to savings and debt management. Its in its early stages but will 
            be launched before the year ends.</p>
            <div className='mt-4 flex justify-center items-center'>
              <button ><a href='https://github.com/Cynthia-Isutsa/TaliiKe-Blog' 
              className='bg-[#899921] px-4 py-2 font-semibold'>Source Code</a></button>
            </div>
          </div>
          <div className='flex-1'>
            <img src={work3} alt='project1' />
          </div>
        </div>


        <div className=' m-10  flex md:flex-row flex-col flex-1 justify-center items-center gap-8'>
          <div className='flex-1'>
            <img src={work1} alt='project1' />
          </div>
          <div className='flex-1'>
            <h1 className='text-[#899921] text-4xl font-semibold mb-4'>Blog Site</h1>
            <p className='text-lg text-gray-400'>A blog done in Nextjs Tailwind and typescript. The backend was done using
            Strapi, a headless CMS. The aim of doing the blog in Nextjs was to learn Nextjs file based routing system and
           leverage prerendering and server side rendering advantages.<br/></p>
            <div className='mt-3 flex justify-center items-center'>
              <button ><a href='https://github.com/Cynthia-Isutsa/TaliiKe-Blog' 
              className='bg-[#899921] px-4 py-2 font-semibold'>Source Code</a></button>
            </div>
          </div>
        </div>

        <div className=' mx-10 my-20 flex md:flex-row flex-col flex-1 justify-center items-center gap-8'>
          <div className='flex-1'>
            <h1 className='text-[#899921] text-4xl font-semibold mb-4'>Copywriting Portfolio</h1>
            <p className='text-lg text-gray-400'>A portfolio done in Nextjs Tailwind and typescript. It has the services, contact and about page.
             The aim of doing the portfolio in Nextjs was to highlight its perfomance compared to my portfolio in reactgiven it has the
              prerendering and server side rendering advantages.<br/></p>
            <div className='mt-4 flex justify-center items-center'>
              <button ><a href='https://github.com/Cynthia-Isutsa/TaliiKe-Blog' 
              className='bg-[#899921] px-4 py-2 font-semibold'>Source Code</a></button>
            </div>
          </div>
          <div className='flex-1'>
            <img src={work2} alt='project1' />
          </div>
        </div>

        <div className='bg-[#0D0D0D] h-[200px] flex flex-col items-center justify-center'>
          <h1 className = 'text-[#FAFBE9] text-4xl md:text-5xl mb-7 text-center italic'>Want us to work together??</h1>
          <button><a href='/contact' value='button' className='bg-[#899921] text-black mt-6 mb-6 px-8 py-2 font-semibold
          text-lg text-center cursor-pointer hover:scale-110 ease-in duration-200'>Send Message</a></button>
      </div>

    </div>
  )
}

export default Work
