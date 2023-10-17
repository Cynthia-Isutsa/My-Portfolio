import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp} from 'react-icons/fa'



const Main = () => {
  return (
    <div className ='bg-black/90 flex justify-center items-center'>
      <div className=' bg-black/30 mt-40 mb-28'>
        <div className= 'max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg::items-start items-center'>
  
          <h1 className = 'text-[#fafbe9] sm:text-5xl text-4xl font-bold'>I'm Isutsa Cynthia</h1>
          <h2 className = 'text-[#899921] flex sm:text-4xl text-3xl pt-5'>I'm a
          <TypeAnimation
             sequence={[
              'Web Developer',
              1000,
              'Frontend Developer',
              2000,
              'FinTech Enthusiast',
              2000,
              ]}
              wrapper="div"
              speed={50}
              cursor={true}
              style={{ fontSize: '1em', paddingLeft: '5px', color: '#899921' }}
              repeat={Infinity}
          />
          </h2>
          <h5 className = 'text-gray-400 flex sm:text-2xl text-2xl pt-5 flex-col justify-center text-start'>I am a Front-end developer based in Nairobi, Kenya. 
            I like to craft solid and  scalable web applications that delight users and drive results. 
            Reach Out for us to develop something great together. </h5>
          
          <div className = 'flex justify-between pt-10 max-w-[200px] w-full'>
            <a href ='https://www.linkedin.com/in/cynthia-isutsa-2b282220b/' target="_blank">
                <FaLinkedin size = {20} className ='cursor-pointer fill-[#fafbe9]'/>
            </a>
            <a href='https://github.com/Cynthia-Isutsa' target='_blank'>
                <FaGithub size={20} className ='cursor-pointer fill-[#fafbe9]'/>
            </a>
            <a href='https://twitter.com/Nisutsa?t=D-4jGXK5T1vBzc8idO8lGg&s=08' target='_blank'>
                <FaTwitter size={20} className ='cursor-pointer fill-[#fafbe9]'/>
            </a>
            <a href='https://wa.me/+254727035487' target='_blank'>
                <FaWhatsapp size={20} className ='cursor-pointer fill-[#fafbe9]'/>
            </a>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Main

