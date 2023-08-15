import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main' className ='bg-black/90 w-full h-screen'>
      <div className='w-full h-screen absolute top-0 left-0 bg-black-30'>
        <div className= 'max-w-[700px m-auto h-full w-full flex flex-col justify-center lg::items-start items-center'>
          <h1 className = 'text-[#b9af88] sm:text-5xl text-4xl font-bold'>I'm Isutsa Cynthia</h1>
          <h2 className = 'text-[#b9af88] flex sm:text-2xl text-2xl pt-4'>I'm a
          <TypeAnimation
             sequence={[
              'Software Developer',
              1000,
              'Coder',
              2000,
              'FinTech Enthusiast',
              2000,
              ]}
              wrapper="div"
              speed={50}
              cursor={true}
              style={{ fontSize: '1em', paddingLeft: '5px', color: '#b9af88' }}
              repeat={Infinity}
          />
          </h2>
          <div className = 'flex justify-between pt-6 max-w-[100px] w-full'>
            <a href ='https://www.linkedin.com/in/cynthia-isutsa-2b282220b/' target="_blank">
                <FaLinkedin size = {20} className ='cursor-pointer fill-[#a89d74]'/>
            </a>
            <a href='https://github.com/Cynthia-Isutsa' target='_blank'>
                <FaGithub size={20} className ='cursor-pointer fill-[#a89d74]'/>
            </a>
            <a href='https://github.com/Cynthia-Isutsa' target='_blank'>
                <FaTwitter size={20} className ='cursor-pointer fill-[#a89d74]'/>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main

