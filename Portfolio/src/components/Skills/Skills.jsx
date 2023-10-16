import React from 'react'
import SkillsItem from './SkillsItem'
import Item from './Item'

const Skills = () => {
  return (
    <div id='skills' className=' max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h2 className ='text-[#899921] md:text-4xl max-md:text-2xl font-900 text-center'>Skills</h2>
      <p className='text-center p-2 mb-5 sm:text-sm text-gray-400'>My Technical Stack</p>

      <div className='grid md:grid-cols-2 lg:grid-col-3 gap-12'>
        <div className='relative flex flex-col justify-center h-auto w-full shadow-xl shadow-[#001C30] rounded-xl group hover:bg-gradient-to-r from-[#272829] to-[#2C3333]'>
          <SkillsItem title= 'Frontend Developer'/>
          <div className='flex flex-row flex-start items-center'>
            <div className='m-7'>
                <Item title1='HTML CSS' level1='Advanced'/>
                <Item title1='REACT' level1= 'Proficient' />
            </div>
            <div>
                <Item title1='JavaScript' level1= 'Proficient'/>
                <Item title1='Tailwind' level1= 'Proficient'/>
            </div>
          </div>
        </div>

        <div className='relative flex flex-col justify-center h-auto w-full shadow-xl shadow-[#001C30] rounded-xl group hover:bg-gradient-to-r from-[#272829] to-[#2C3333]'>
          <SkillsItem title= 'Backend Developer'/>
          <div className='flex flex-row flex-start items-start'>
            <div className='m-7'>
              <Item title1='PostGres' level1='Advanced'/>
              <Item title1='Django' level1= 'Proficient' />
            </div>
            <div className='m-7'>
              <Item title1='Node' level1='Proficient' />
              <Item title1='Express' level1= 'Proficient' />
            </div>
          </div>
        </div>

        <div className='relative flex flex-col justify-center h-auto w-full shadow-xl shadow-[#001C30] rounded-xl group hover:bg-gradient-to-r from-[#272829] to-[#2C3333]'>
          <SkillsItem title= 'Product Management'/>
          <div className= 'flex flex-row flex-start items-start'>
            <div className='m-7'>
              <Item title1='Git' level1= 'Proficient' />
              <Item title1='GitHub' level1= 'Proficient' />
            </div>
            <div className='m-7'>
              <Item title1='Rest' level1= 'Proficient' />
            </div>
          </div>
        </div>
          
      </div>
    </div>
  )
}

export default Skills
