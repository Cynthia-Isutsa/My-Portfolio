import React from 'react'

const ProjectItem = ({title, description, technologies, status, code}) => {
  return (
    <div className='relative flex flex-col items-start justify-center h-auto w-full shadow-xl shadow-[#001C30] rounded-xl group hover:bg-gradient-to-r from-[#272829] to-[#2C3333]'>
        <div className='p-4'>
            <h3 className='text-[#fafbe9] font-900 text-xl tracking-wider mb-3 text-center'>{title}</h3>
            <p className='text-gray-400 text-lg'>{description}</p>
            <p className='text-gray-400 pb-3 pt-3 text-lg'>{technologies}</p>
            <p className='text-gray-400 text-1xl'>{status}</p>
            <button type='button' className='bg-[#899921] m-6 rounded-lg pt-2 pb-2 pl-3 pr-3 text-lg font-[500] text-center cursor-pointer hover:scale-110 ease-in duration-200'><a href={code} target='_blank'>More Info</a></button>       
        </div> 
    </div>
  )
}

export default ProjectItem
