import React from 'react'

const Resume = () => {
  return (
    <div>
        <div className='bg-[#0D0D0D] h-[150px]'>
          <h1 className = 'text-[#FAFBE9] text-4xl text-center pt-10 italic'>My Resume!!!</h1>
      </div>
    <div className='grid grid-col-1 md:grid-cols-2 gap-8 mx-14 my-10'>
      <div className='mb-16'>
        <h1 className='text-[#899921] font-semibold text-3xl'>Contact Info</h1>
        <p className='text-gray-400 text-xl mb-2 mt-4'>Name <span className='pl-32 italic'>Isutsa Cynthia</span></p>
        <p className='text-gray-400 text-xl'>Email <span className='pl-32 italic'>isutsacynthia@gmail.com</span></p>
      </div>
      <div className='mb-16'>
        <h1 className='text-[#899921] font-semibold text-3xl'>Education</h1>
        <p className='text-gray-400 text-xl mb-2 mt-4'>Kenyatta University<span className='pl-32 italic'>Bachelor in Commerce, Accounts</span></p>
        <p className='text-gray-400 text-xl'>ALX<span className='pl-60 italic'>Software Engineering Certification</span></p>
      </div>
      <div className=''>
        <h1 className='text-[#899921] font-semibold text-3xl'>Work Experience</h1>
        <p className='text-gray-400 text-xl mb-2  mt-4'>Upwork: Freelance <span className='pl-32 italic'>January 2023-date</span></p>
        <p className='text-gray-400 text-xl'>Maganji.co <span className='pl-44 italic'>October2 2023 - date</span></p>
      </div>
      <div className=''>
        <h1 className='text-[#899921] font-semibold text-3xl'>Programming Languages and Frameworks</h1>
        <p className='text-gray-400 text-xl mb-2 mt-4'>HTML/CSS <span className='pl-32 italic'></span></p>
        <p className='text-gray-400 text-xl mb-2'>Javascript <span className='pl-32 italic'>React, Svelte, Node, Express</span></p>
        <p className='text-gray-400 text-xl'>Python <span className='pl-40 italic'>Django</span></p>
      </div>
      <div className=''>
        <h1 className='text-[#899921] font-semibold text-3xl'>References / More Info</h1>
        <p className='text-gray-400 text-xl mb-2'>For references or more details, send email
        <br /><span className='text-[#899921] underline italic text-lg'>isutsacynthia@gmail.com</span> </p>
    
      </div>
     
      
    </div>
      
    </div>
  )
}

export default Resume
