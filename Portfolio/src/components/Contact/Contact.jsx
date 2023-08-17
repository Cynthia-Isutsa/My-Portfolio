import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h2 className ='text-[#b9af88] sm:text-4xl font-900 text-center'>Get in Touch</h2>
      <p className='text-center mt-1 mb-5 sm:text-sm text-[#CBB682]'>Contact Me!</p>

      <form action="">
        <label htmlFor="Name"></label>
        <input type='text' />
      </form>
    </div>
  )
}

export default Contact
