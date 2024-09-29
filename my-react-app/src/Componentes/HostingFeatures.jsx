import React from 'react'
import x247 from "../assets/24x7.svg"
import day30 from "../assets/30day.svg"
import x99 from "../assets/99.svg"
import bandwidth from "../assets/bandwidth.svg"
import cloud from "../assets/cloud.svg"
import websitebuilder from "../assets/websitebuilder.svg"
import ssl from "../assets/ssl.svg"
import litespeed from "../assets/litespeed.svg"
import imunify from "../assets/imunify.svg"
import freedomain from "../assets/freedomain.svg"
import cpanel from "../assets/cpanel.svg"
import daily from"../assets/daily.svg"


function HostingFeatures() {
  return (
    <div >
      <h1 className='text-5xl ml-36 py-16'>
        Unlimited cPanel Cloud Hosting Features
      </h1>
      <p className='text-gray-600 ml-36 text-xl mb-9'>Experience smooth and hassle-free hosting with our unlimited cPanel Cloud <br /> Hosting, equipped with top-notch features.</p>

      {/* 1 */}
      <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-5 gap-5 text-start mt-16 mx-auto '>
        <div className=' ml-36 '>
          <img src={litespeed} alt="" className='h-16 w-16' />
          <h1 className='text-xl py-2'>LiteSpeed Web Server</h1>
          <p className='text-gray-400'>SpidyHost's unlimited cPanel Cloud hosting comes  with an integrated LiteSpeed Web Server, ensuring  optimal website performance in terms of both traffic  handling and speed.</p>
        </div>
        {/* 2 */}
        <div className=' ml-36 '>
          <img src={freedomain} alt="" className='h-16 w-16'/>
          <h1 className='text-xl py-2'>Free Domain Name</h1>
          <p className='text-gray-400'>When you purchase a 3-year plan of our unlimited cPanel Cloud hosting, you will receive a complimentary .com/.net/.org/.in domain absolutely free of charge.</p>
        </div>
        {/* 3 */}
        <div className=' ml-36 '>
          <img src={ssl} alt="" className='h-16 w-16' />
          <h1 className='text-xl py-2'>SSL Encryption</h1>
          <p className='text-gray-400'>
            Our Unlimited cPanel Hosting provides SSL to every website hosted on our servers, ensuring they are secured with Wildcard SSL at no additional cost. Your website will always be secure with HTTPS</p>
        </div>
        {/* 4 */}

        <div className=' ml-36 '>
          <img src={imunify} alt="" className='h-16 w-16'/>
          <h1 className='text-xl py-2'>Imunify 360</h1>
          <p className='text-gray-400'>Imunify 360 safeguards all websites against malware infections, web attacks, vulnerability exploitation, and all other potential threats.
          </p>
        </div>
        {/* 5 */}
        <div className=' ml-36 '>
          <img src={cloud} alt="" className='h-16 w-16'/>
          <h1 className='text-xl py-2'>CloudLinux OS</h1>
          <p className='text-gray-400'>CloudLinux OS protects your websites from attacks by virtualizing users' file systems, preventing sensitive information disclosure, and enhancing website performance</p>
        </div>
        {/* 6 */}
        <div className=' ml-36 '>
          <img src={daily} alt="" className='h-16 w-16' />
          <h1 className='text-xl py-2'>Daily Backups</h1>
          <p className='text-gray-400'>Our Unlimited cPanel Cloud Hosting plans come with daily automated backups. We perform off-site backups at a minimum frequency of once daily, ensuring your data is secure.</p>
        </div>
        {/* 7 */}
        <div className=' ml-36  '>
          <img src={bandwidth} alt="" className='h-16 w-16'/>
          <h1 className='text-xl py-2'>Unlimited Bandwidth</h1>
          <p className='text-gray-400'>There are no limits on the amount of traffic your hosting site or app can receive. Unlimited traffic is free and applies to both incoming and outgoing data.

          </p>
        </div>
        {/* 8 */}
        <div className=' ml-36 '>
          <img src={cpanel} alt="" className='h-16 w-16'/>
          <h1 className='text-xl py-2'>Powered by cPanel</h1>
          <p className='text-gray-400'>The most popular and powerful web hosting control panel for easy point-and-click management of your hosting account.</p>
        </div>
        {/* 9 */}
        <div className=' ml-36 '>
          <img src={websitebuilder} alt="" className='h-16 w-16' />
          <h1 className='text-xl py-2'>Free Website Builder</h1>
          <p className='text-gray-400'>Create an awesome website in just a few minutes. Our unlimited cPanel cloud hosting includes a free site-building tool. Drag and drop the content and images; there you go!</p>
        </div>
        {/* 10 */}
        <div className=' ml-36 '>
          <img src={x99} alt="" className='h-16 w-16'/>
          <h1 className='text-xl py-2'>99.99% Uptime</h1>
          <p className='text-gray-400'>Our data centers boast a 200+ GBit/s global backbone with robust DDoS protection, ensuring a secure environment. We guarantee 99.9% uptime for uninterrupted service. Moreover, our data centers hold certifications including SSAE 16/ISAE 3402 SOC 1 Type II, ISO 27001, and PCI DSS, ensuring the highest standards of security and compliance.</p>
        </div>
        {/* 11 */}
        <div className=' ml-36 '>
          <img src={x247} alt="" className='h-16 w-16' />
          <h1 className='text-xl py-2'>24x7 Human Support</h1>
          <p className='text-gray-400'>Customer satisfaction is of utmost importance to us, and we are available to assist you at any time. We are more than happy to address your questions and provide support through various channels, including mobile calls, WhatsApp, live chat, and our ticket system. Feel free to reach out to us whenever you need assistance.</p>
        </div>
        {/* 12 */}
        <div className=' ml-36 '>
          <img src={day30} alt="" className='h-16 w-16' />
          <h1 className='text-xl py-2'>30 Day Money Back</h1>
          <p className='text-gray-400'>We have full confidence in the quality of our services, and we take pride in offering you a 30-day money-back guarantee with no questions asked.</p>
        </div>


      </div>
    </div>
  )
}

export default HostingFeatures