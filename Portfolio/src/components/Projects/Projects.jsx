import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h2 className ='text-[#b9af88] sm:text-4xl font-900 text-center'>Projects</h2>
      <p className='text-center mt-1 mb-5 sm:text-sm text-[#CBB682]'>Freelance || Independent projects</p>
    
    <div className='grid sm:grid-cols-2 gap-12'>
      <ProjectItem title='Alchemist Bar' description='Description: This is a client restaurant app' technologies='Technologies:  React REST Github' status='Status:  Completed' code='https://github.com/Cynthia-Isutsa/Alchemist-Bar-Recreation'/>
      <ProjectItem title ='Darshing' description='Description: This is a web based e-commerce app' technologies='Technologies:  React Tailwind Github' status='Status: In Progress' code='https://github.com/Cynthia-Isutsa/Darshing-E-commerce-site'/>
      <ProjectItem title ='Latex Foods' description='Description: This is a food ordering app' technologies='Technologies: Tailwind, Next.js, React, Node.js, Firebase' status='Status:  In Progress' code='https://github.com/Cynthia-Isutsa/Latex-Food-Ordering-App'/>
      <ProjectItem title= 'chatGPT3 App' description='Description: This is a chatGPT3 clone' technologies='Technologies:  React Github' status='Status:  Completed' code='https://chat-gpt3clone.netlify.app/'/>
    </div>
    
    </div>
  )
}

export default Projects
