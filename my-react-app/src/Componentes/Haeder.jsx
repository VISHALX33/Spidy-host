import React from 'react'
import spidyhost1 from '../assets/ControlPanel/spidyhost1.webp'
import { FaArrowDown, FaPersonCircleCheck } from 'react-icons/fa6'

function Header() {
  return (
    <div className='m-auto'>

      {/* Container for the header */}
      <div className='flex flex-wrap items-center justify-between px-5 md:px-10 lg:px-20 py-4'>
        
        {/* Logo */}

        {/* Menu buttons */}
        <div className='flex flex-wrap gap-10 items-center py-4'>
        <img src={spidyhost1} alt="Logo" className='py-6 h-24' />

          <button className='text-sm md:text-lg lg:text-xl flex items-center gap-2'>Hosting <FaArrowDown className='mt-1' /></button>
          <button className='text-sm md:text-lg lg:text-xl flex items-center gap-2'>Reseller <FaArrowDown className='mt-1' /></button>
          <button className='text-sm md:text-lg lg:text-xl'>Email</button>
          <button className='text-sm md:text-lg lg:text-xl flex items-center gap-2'>Server <FaArrowDown className='mt-1' /></button>
          <button className='text-sm md:text-lg lg:text-xl'>Domain</button>
        </div>

        {/* Contact Info and Get Started Button */}
        <div className='flex flex-wrap items-center gap-4'>
          <h1 className='text-sm md:text-lg lg:text-xl text-end'>+91 99089 90490</h1>
          <button className='text-sm md:text-lg lg:text-xl flex items-center gap-2 text-end bg-blue-900 text-white p-2 md:p-3 rounded-xl hover:bg-blue-500'>Get Started</button>
          <button><FaPersonCircleCheck className='text-2xl md:text-3xl' /></button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Header
