import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h2 className ='text-[#b9af88] sm:text-4xl font-900 text-center'>Get in Touch</h2>
      <p className='text-center mt-1 mb-5 sm:text-sm text-[#CBB682]'>Contact Me!</p>

      <form action="https://getform.io/f/7b4a482d-0007-43e5-8949-20f63e7fd26c" method='POST' encType='multipart/form-data' className='h-auto w-full shadow-xl shadow-[#001C30] rounded-xl group hover:bg-gradient-to-r from-[#272829] to-[#2C3333]'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
              <label className='text-[#b9af88] text-sm py-2 text-center'>Name</label>
              <input type='text' name='name' placeholder='Enter your name' required className='border-2 rounded-lg p-2 flex border-gray/300 text-black mb-4'/>
            </div>
            <div className='flex flex-col'>
              <label className='text-[#b9af88] text-sm py-2 text-center'>Phone Number</label>
              <input type='text' name='number' placeholder='Enter your phone number' required className='border-2 rounded-lg p-2 flex border-gray/300 text-black mb-4'/>
            </div>
        </div>
            <div className='flex flex-col'> 
              <label className='text-[#b9af88] text-sm py-2 text-center'>E-Mail</label>
              <input type="email" name='email' placeholder='Enter your email' required className='border-2 rounded-lg p-2 flex border-gray/300 text-black mb-4'  />
            </div>
            <div className='flex flex-col'>
              <label className='text-[#b9af88] text-sm py-2 text-center'>Message</label>
              <textarea className='border-2 rounded-lg p-2' rows='7' name='message' placeholder='Write about your project' required></textarea>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <button value='button' p-3 className='bg-[#CBB682] text-black rounded-lg mt-6 mb-6 p-4 w-full text-lg font-[500] text-center cursor-pointer hover:scale-110 ease-in duration-200'>Message</button>
            </div>
      </form>
    </div>
  )
}

export default Contact
