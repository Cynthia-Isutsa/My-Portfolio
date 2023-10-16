import React from 'react'

const Contact = () => {
  return (
  <div>
    <div id='contact' className='container mt-5 flex flex-col justify-center items-center'>
      <h2 className ='text-[#0096A9] sm:text-4xl font-900'>Get in Touch</h2>
      <p className=' mt-1 mb-5 sm:text-sm text-[#0096A9]'>Contact Me!</p>

      <form  action="https://getform.io/f/7b4a482d-0007-43e5-8949-20f63e7fd26c" method='POST' encType='multipart/form-data'
      autoComplete='on' className=' flex flex-col mt-8 shadow-xl shadow-[#001C30]'>
        
          <label className='text-left text-lg text-[#b9af88]'>Name**</label>
          <input type='text' name='name' placeholder='Your Name' 
          className="border-hidden outline-none bg-gray-300 pl-2 md:pr-[400px] py-3 my-2" />

          <label className='text-left text-lg text-[#b9af88] mt-5'>Email**</label>
          <input type='email' name='email' placeholder='Your Email' 
          className="border-hidden outline-none bg-gray-300 pl-2 md:pr-[400px] py-3 my-2" />
          
          <label className='text-left text-[#b9af88] text-lg mt-5'>Message**</label>
          <textarea placeholder='Start typing your message here....' name='message' rows={6}  
          className="border-hidden outline-none bg-gray-300 pl-2 md:pr-[400px] py-3 my-2"/>
        
          <div className=' flex flex-col justify-center items-center'>
            <button value='button' p-3 className='bg-[#0096A9] text-black mt-6 mb-6 px-8 py-2 font-semibold text-lg text-center cursor-pointer hover:scale-110 ease-in duration-200'> Send Message</button>
          </div>
      </form>
    
    </div>
  </div>
  )
}

export default Contact
