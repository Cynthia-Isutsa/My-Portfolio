import React from 'react'
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc'

const Item = ({title1, level1}) => {
  return (
    <div className=''>
            <div className='flex flex-row justify-start'>
                <VscDebugBreakpointLogUnverified size={20} className='fill-gray-400 mr-3'/>
                <h4 className='text-[#fafbe9] text-xl font-800 font-semibold mb-1'>{title1}</h4>
            </div>
            <div>
                <p className='text-gray-400 text-lg ml-7 mb-7'>{level1}</p>
            </div>
    </div>
  )
}

export default Item
