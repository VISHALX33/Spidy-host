import React from 'react'
import serverlocation from '../assets/Sponser/serverslocations.png'

function ServerLocation() {
  return (
   
    <div>
        <div className='text-center border-t-4 border-blue-900'>
            <h1 className='mt-16 mb-10 text-4xl'>Our Global Data Center Locations</h1>
            <h3 className='text-gray-600 py-3'>Experience an unmatched web hosting experience with our state-of-the-art <br className='text-gray-600'/>data centers, featuring high redundancy, fast connectivity, and low latency.</h3>
            <img src={serverlocation} alt="" />
        </div>
    </div>
  )
}

export default ServerLocation