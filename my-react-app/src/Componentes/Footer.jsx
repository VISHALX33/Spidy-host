import React from 'react'
import spidyhost from '../assets/ControlPanel/spidyhost.webp'
import { FaFacebook, FaInstagram ,FaTwitter } from 'react-icons/fa';


function Footer() {
  return (
    <div className='bg-blue-950  border-t-4 border-blue-800 text-center items-center justify-center'>
      <div className='grid md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-5 sm:grid-cols-2 grid-cols-1 mb-5 gap-2  mt-16 mx-10   '>
        <div className=''>
      <img src={spidyhost} alt="" className='py-6 h-24' />
      <h1 className='text-white  '>
        
        SPIDYHOST is an emerging website on a mission to make web hosting simple, affordable and accessible to every online business owners and developers.
      </h1>
      <div className='flex gap-5 mt-5'>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer " className='text-white'>
        <FaFacebook size={30} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='text-white'>
        <FaInstagram size={30} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='text-white'>
        <FaTwitter size={30} />
      </a>
      
    </div>
    <h1 className=' border-white text-white mt-3'>

        <span className='text-center rounded-2xl border-2 border-white text-white px-3  '>Spidyhost is a World Host Group Company.
        </span>     
           </h1>
      </div>


        {/* 1 */}
        <div className='justify-between ml-32 '>
          <p className='text-gray-400 py-1'>Company</p>
          <p className='text-white py-1'>About Us</p>
          <p className='text-white py-1'>Contact Us</p>
          <p className='text-white py-1'>Terms & Conditions</p>
          <p className='text-white py-1'>Company Details</p>
        </div>

        {/* 2 */}
        <div className='justify-between '>
          <p className='text-gray-400 py-1'>Services</p>
          <p className='text-white py-1'>cPanel Cloud Hosting</p>
          <p className='text-white py-1'>Enhance Cloud Hosting</p>
          <p className='text-white py-1'>Windows ASP .Net Web Hosting</p>
          <p className='text-white py-1'>WordPress Hosting</p>
        </div>

        {/* 3 */}
        <div className='justify-between '>
          <p className='text-gray-400 py-1'>Information</p>
          <p className='text-white py-1'>Uptime monitoring</p>
          <p className='text-white py-1'>Reviews</p>
          <p className='text-white py-1'>Data Centers</p>
          <p className='text-white py-1'>Report Abuse </p>
        </div>

        {/* 4 */}
        <div className='justify-between '>
          <p className='text-gray-400 py-1'>Domain & Email</p>
          <p className='text-white py-1'> Domain Checker</p>
          <p className='text-white py-1'> Domain Transfer</p>
          {/* <p className='text-white py-1'>Terms & Conditions</p> */}
          <p className='text-white py-1'>Whois Checker </p>
        </div>
      </div>
      <hr />
       
       <div className='flex'>

       <div> 
        <h1 className='mx-10 text-white py-4'>
        © 2024 Spidyhost. All rights reserved.
        <br />
        +91 99089 90490
        </h1>
        </div>

        <div className=' text-end'>  
        <h1 className='mx-10 text-white py-4 px-96 text-end'>
        Privacy Manager | Terms & Conditions | Company Details | Registrants Rights & Responsibilities



        </h1>
        </div>


       </div>
      




    </div>
  )
}

export default Footer