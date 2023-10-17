import React from 'react'
import ResumeItem from './ResumeItem'
import Item from './item'

const Resume = () => {
  return (
  <div>
    <div className='bg-[#0D0D0D] h-[150px]'>
          <h1 className = 'text-[#FAFBE9] text-4xl text-center pt-10 italic'>My Resume!!!</h1>
    </div>
    <div className='grid grid-col-1 md:grid-cols-2 lg:grid-col-3 gap-8 mx-14 my-10'>
      <div className='relative flex flex-col justify-center h-auto w-full shadow-xl shadow-[#001C30] rounded-xl group hover:bg-gradient-to-r from-[#272829] to-[#2C3333]'>
          <ResumeItem title= 'Contact Infor'/>
          <div className='flex flex-col justify-start items-start'>
            <div className='m-4'>
                <Item title1='Name*' level1='Cynthia Isutsa'/>  
            </div>
            <div className='m-4'>
                <Item title1='Email*' level1= 'isutsacynthia@gmail.com' />    
            </div>
          </div>
        </div>

        <div className='relative flex flex-col justify-center h-auto w-full shadow-xl shadow-[#001C30] rounded-xl group hover:bg-gradient-to-r from-[#272829] to-[#2C3333]'>
          <ResumeItem title= 'Education'/>
          <div className='flex flex-col justify-start items-start'>
            <div className='m-4'>
                <Item title1='Kenyatta University' level1='BCom(Accounts)'/>  
            </div>
            <div className='m-4'>
                <Item title1='ALX' level1= 'Sofware Engineering' />    
            </div>
          </div>
        </div>
     
        <div className='relative flex flex-col justify-center h-auto w-full shadow-xl shadow-[#001C30] rounded-xl group hover:bg-gradient-to-r from-[#272829] to-[#2C3333]'>
          <ResumeItem title= 'Work Experience'/>
          <div className='flex flex-col justify-start items-start'>
            <div className='m-4'>
                <Item title1='Upwork:Freelance' level1='January 2023 - date'/>  
            </div>
            <div className='m-4'>
                <Item title1='Manganji.co: Founder' level1= 'September 2023 - date' />    
            </div>
          </div>
        </div>
     
        <div className='relative flex flex-col justify-center h-auto w-full shadow-xl shadow-[#001C30] rounded-xl group hover:bg-gradient-to-r from-[#272829] to-[#2C3333]'>
          <ResumeItem title= 'My tech Stack'/>
          <div className='flex flex-col justify-start items-start'>
            <div className='m-2'>
                <Item title1='HTML/CSS' level1=''/>  
            </div>
            <div className='m-2'>
                <Item title1='Javascript' level1= 'React, Node, Express' />    
            </div>
            <div className='m-2'>
                <Item title1='Python' level1= 'Django' />    
            </div>
          </div>
        </div>
     
        <div className='relative flex flex-col justify-center h-auto w-full shadow-xl shadow-[#001C30] rounded-xl group hover:bg-gradient-to-r from-[#272829] to-[#2C3333]'>
          <ResumeItem title= 'References / More Info'/>
          <div className='flex flex-col justify-start items-start'>
            <div className='m-1'>
                <Item title1='For references or more details' level1='please email'/>  
            </div>
            <div className='m-1'>
                <Item title1='Email' level1= 'isutsacynthia@gmail.com' />    
            </div>
          </div>
        </div>
     
     
      
    </div>
      
  </div>
  )
}

export default Resume
