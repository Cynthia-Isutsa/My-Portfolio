import React from 'react'
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc'

const Item = ({title1, level1}) => {
  return (
    <div className=''>
            <div className='flex flex-row justify-start'>
                <VscDebugBreakpointLogUnverified size={20} className='fill-[#fafbe9] mr-3'/>
                <h4 className='text-gray-400 font-800 text-lg mb-1'>{title1}</h4>
            </div>
            <div>
                <p className='text-gray-400 text-sm ml-7 mb-7'>{level1}</p>
            </div>
    </div>
  )
}

export default Item
