import React from 'react'
import cloud from "../assets/Sponser/cloud.svg"
import cloudflare from "../assets/Sponser/cloudflare.svg"
import cpanel from "../assets/Sponser/cpanel.svg"
import letsencrypt from "../assets/Sponser/letsencrypt.svg"
import Lite from "../assets/Sponser/Lite.svg"
import samsung from "../assets/Sponser/samsung.svg"


function Sponser() {
    return (
        <div className='bg-white flex py-16 gap-10 text-center items-center justify-center '>
            <div>
                <img src={cpanel} alt="" className='h-16 w-52' />
            </div>
            <div>
                <img src={cloud} alt="" className='h-16 w-52 '/>
            </div>
            <div>
                <img src={Lite} alt="" className='h-16 w-52 '/>
            </div>
            <div>
                <img src={cloudflare} alt="" className='h-16 w-52 '/>
            </div>
            <div>
                <img src={letsencrypt} alt="" className='h-16 w-52 ' />
            </div>
            <div>
                <img src={samsung} alt="" className='h-16 w-52 ' />
            </div>
            
        </div>
    )
}

export default Sponser