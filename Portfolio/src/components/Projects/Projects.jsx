import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h2 className ='text-[#b9af88] sm:text-4xl font-900 text-center'>Projects</h2>
      <p className='text-center mt-1 mb-5 sm:text-sm text-[#CBB682]'>Freelance || Independent projects</p>
    
    <div className='grid sm:grid-cols-2 gap-12'>
      <ProjectItem title='Alchemist Bar' description='Description: This is a client restaurant app' technologies='Technologies:  React Tailwind Github' status='Status:  Completed' code='https://github.com/Cynthia-Isutsa/Alchemist-Bar-Recreation'/>
      <ProjectItem title ='CodeKe Blog' description='Description: This is a blog site' technologies='Technologies:  React Next.js Tailwind Typescript Strapi Github' status='Status: Completed' code='https://github.com/Cynthia-Isutsa/TaliiKe-Blog'/>
      <ProjectItem title ='Barbra-Portfolio' description="Description: This is a client's copywriting portfolio site" technologies='Technologies: Next.js, Tailwind, Typescript, React' status='Status:  Completed' code='https://github.com/Cynthia-Isutsa/Barbra-Portfolio'/>
      <ProjectItem title= 'Maganji.co' description='Description: A budgeting app with budgeting principles' technologies='Technologies:  React, Redux, Tailwind, Github' status='Status:  In progress' code='https://github.com/Cynthia-Isutsa/Maganji.co'/>
    </div>
    
    </div>
  )
}

export default Projects
