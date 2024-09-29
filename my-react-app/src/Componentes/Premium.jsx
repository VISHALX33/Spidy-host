import React from 'react'
import logo1 from '../assets/free.svg'
import logo2 from '../assets/Baby.svg'
import logo3 from '../assets/Younger.svg'
import logo4 from '../assets/Hero.svg'

function Premium() {
  return (<>
    <div className='h-full p-8'>
      
      <h1 className='justify-center items-center text-center text-5xl  '>
      Premium cPanel Cloud hosting plans
      </h1>
      <br />
      <br />
      <h3 className='justify-center items-center text-center'>
      Pre applied Promocode: WINTER50 to get flat 50% Discount. The price is <br /> displayed for the 36-month term.
      </h3>
    </div>
    <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 mb-5 gap-5 text-start mt-16 mx-auto '>
    <div className='bg-white rounded-xl border-2 border-gray py-5 mx-9 text-black  px-12 items-start '>
    <img src={logo1} alt="" className=' w-80 mb-20  rounded-3xl overflow-hidden  border-2 mt-6 shadow-2xl ' />
      <div className='text-blue-900 font-semibold text-3xl'>
      cPanel Free Trial <br />
     <span className='text-gray-400 mt-6 text-xl'> Upgrade options available</span>
      </div>
      <div className='my-8 '>
        <p className='text-gray-400'>From</p>
          <h1 className='text-4xl text-blue-900 font-semibold'>
            Free <span className='text-sm text-gray-400 '>/3 DAYS</span>
          </h1>
          </div>
      <button className='border-gray rounded-xl border-2 p-3 mb-3'>
        order now
      </button>

    <br />1 Website <br />1 GB SSD Storage <br />100 GB Bandwidth <br />1 GB RAM <br />1 Core CPU <br />No Free Domain
<br />1 Email Account <br />1 SQL Databases <br />No Subdomains <br />SitePad Website Builder<br />Node Js / Python Support
<br />MongoDB Remote Support<br />Django Support<br />Fully Managed WordPress<br />LiteSpeed + LSCache<br />Softaculous 400+ Apps<br />Object Cache Redis<br />Immunify 360 Malware Scan
<br />Premium CDN - QUIC cloud<br />Terminal Access<br />Daily Backups<br />Enhanced DDoS Protection<br />Free SSL Certificate<br />Free Migration (Limited)<br />Unlimited Inodes<br />24/7/365 Support<br />Free 3 Days Trial
    </div>
{/* /////////////////////////2////////////////////////// */}

    <div className='bg-white rounded-xl border-2 border-gray py-5 mx-9 text-black  px-12 items-start '>
    <img src={logo2} alt="" className=' w-80 mb-20  rounded-3xl overflow-hidden  border-2 mt-6 shadow-2xl' />

      <div className='text-blue-900 font-semibold text-3xl'>
      cPanel Baby Plan <br />
     <span className='text-gray-400 mt-6 text-xl'> Buy & Renw at same cost </span>
      </div>
      <div className='my-8 '>
        <p className='text-red-600 '>Was $220</p>
          <h1 className='text-4xl text-blue-900 font-semibold'>
            $77 <span className='text-sm text-gray-400 '>/month</span>
          </h1>
          </div>
      <button className='border-gray rounded-xl border-2 p-3 mb-3'>
        order now
      </button>

    <br />1 Website <br />50 GB NVMe Storage <br />Unmetered Bandwidth <br />2 GB RAM <br />2 Core CPU <br />No Free Domain
<br />10 Email Account <br />5 SQL Databases <br />5 Subdomains <br />SitePad Website Builder<br />Node Js / Python Support
<br />MongoDB Remote Support<br />Django Support<br />Fully Managed WordPress<br />LiteSpeed + LSCache<br />Softaculous 400+ Apps<br />Object Cache Redis<br />Immunify 360 Malware Scan
<br />Premium CDN - QUIC cloud<br />Terminal Access<br />Daily Backups<br />Enhanced DDoS Protection<br />Free SSL Certificate<br />Free Migration <br />Unlimited Inodes<br />24/7/365 Support<br />Free 30 Days Money-Back
    </div>

    {/* ///////////////////////////3////////////////////////////// */}
    <div className='bg-white rounded-xl border-b-4 border-l-4 border-r-4 border-t-4  border-blue-950 py-5 mx-9 text-black  px-12 items-start '>
    <img src={logo3} alt="" className=' w-80 mb-20  rounded-3xl overflow-hidden  border-2 mt-6  shadow-2xl' />

      <div className='text-blue-900 font-semibold text-3xl'>
      cPanel Younger Plan <br />
     <span className='text-gray-400 mt-6 text-xl'> Buy & Renew at same cost</span>
      </div>
      <div className='my-8 '>
        <p className='text-red-600'>Was ₹169</p>
          <h1 className='text-4xl text-blue-900 font-semibold'>
          ₹119 <span className='text-sm text-gray-400 '>/ month</span>
          </h1>
          </div>
      <button className='border-gray rounded-xl border-2 p-3 mb-3'>
        order now
      </button>

    <br />3 Website <br />150 GB SSD Storage <br />Unmetered Bandwidth <br />4 GB RAM <br />2 Core CPU <br />Free Domain
<br />Unlimited Email Account <br />Unlimited SQL Databases <br />Unlimited Subdomains <br />SitePad Website Builder<br />Node Js / Python Support
<br />MongoDB Remote Support<br />Django Support<br />Fully Managed WordPress<br />LiteSpeed + LSCache<br />Softaculous 400+ Apps<br />Object Cache Redis<br />Immunify 360 Malware Scan
<br />Premium CDN - QUIC cloud<br />Terminal Access<br />Daily Backups<br />Enhanced DDoS Protection<br />Free SSL Certificate<br />Free Migration<br />Unlimited Inodes<br />24/7/365 Support<br />Free 30 Days Money-Back
    </div>

    {/* ///////////////////////////////////4/////////////////////////////////////////// */}

    <div className='bg-white rounded-xl border-2 border-gray py-5 mx-9 text-black  px-12 items-start '>
    <img src={logo4} alt="" className=' w-80 mb-20  rounded-3xl overflow-hidden  border-2 mt-6 shadow-2xl ' />

      <div className='text-blue-900 font-semibold text-3xl'>
      cPanel Hero Plan<br />
     <span className='text-gray-400 mt-6 text-xl'> Buy & Renew at same cost</span>
      </div>
      <div className='my-8 '>
        <p className='text-red-600'>Was ₹338</p>
          <h1 className='text-4xl text-blue-900 font-semibold'>
          ₹238
          <span className='text-sm text-gray-400 '>/month</span>
          </h1>
          </div>
      <button className='border-gray rounded-xl border-2 p-3 mb-3'>
        order now
      </button>

    <br />Unlimited Website <br />Unlimited NVMe Storage <br />Unlimited Bandwidth <br />4 GB RAM <br />2 Core CPU <br /> Free Domain
<br />Unlimited Email Account <br />Unlimited SQL Databases <br /> Unlimited Subdomains <br />SitePad Website Builder<br />Node Js / Python Support
<br />MongoDB Remote Support<br />Django Support<br />Fully Managed WordPress<br />LiteSpeed + LSCache<br />Softaculous 400+ Apps<br />Object Cache Redis<br />Immunify 360 Malware Scan
<br />Premium CDN - QUIC cloud<br />Terminal Access<br />Daily Backups<br />Enhanced DDoS Protection<br />Free SSL Certificate<br />Free Migration (Limited)<br />Unlimited Inodes<br />24/7/365 Support<br />Free 30 Days Money-Back
    </div>






  </div>




  </>
  )
}

export default Premium