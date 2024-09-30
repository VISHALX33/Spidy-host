import React from 'react'
import trustpilot from '../assets/ControlPanel/trustpilot.webp'


function Testimonial() {
  return (
    <div className='bg-white py-10'>
      <h1 className='text-center text-4xl mt-20'>
        See what our customers think about us...
      </h1>
      <div className='grid md:grid-cols-1 lg:grid-cols-3  xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-5 gap-6 text-start mt-16  mx-32  '>
        <div  className='border-gray-300 border-2 p-5   '>
        <img src={trustpilot} alt="" className='py-5' />
        <div style={{ fontSize: '24px', color: 'purple', marginBottom: '20px' }}>
      ★ ★ ★ ★ ★
    </div>
          <p className='text-gray-800 '>Server is very fast and most important thing is service, support team given very quick response and good service.</p>
          <p className='mt-12 font-bold'>Satendra</p>
        </div>

        <div  className='border-gray-300 border-2 p-5  '>
        <img src={trustpilot} alt="" className='py-5'/>
        <div style={{ fontSize: '24px', color: 'purple', marginBottom: '20px' }}>
      ★ ★ ★ ★ ★
    </div>
          <p className='text-gray-800'>Spidyhost.com has Mr.Shaik Vahid such amazing great Tech support that will take care of all your technical problems no matter how difficult it was.</p>
          <p className='mt-12 font-bold'>Huo Yeh</p>
        </div>
        <div  className='border-gray-300 border-2 p-5  '>
        <img src={trustpilot} alt="" className='py-5' />
        <div style={{ fontSize: '24px', color: 'purple', marginBottom: '20px' }}>
      ★ ★ ★ ★ ★
    </div>
          <p className='text-gray-800'>I totally love this hosting service, The Spidy Host team is the best. They are always ready to assist. I highly recommend this service for any business type.</p>
          <p className='mt-12 font-bold'>Digital Lync</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial