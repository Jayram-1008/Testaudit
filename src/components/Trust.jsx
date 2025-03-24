import React from 'react'
import TrustPic from '../assets/trust.jpg'
import { CircleGrid } from "react-awesome-shapes";

const Trust = () => {
  return (
    <div className='flex  justify-between px-20  mt-12 gap-0.5'>
        
        
        <div className='w-1/3'>
            <h2 className='text-2xl md:text-3xl font-bold'>Your Trusted <span style={{color:'#d35400'}}><i>Partner</i></span> in Excellence.</h2>
            <br />
            <p>
                Your Trusted Partner in Excellence" Your Trusted Partner in Excellence" Your Trusted Partner in Excellence" Your Trusted Partner in Excellence" Your Trusted Partner in Excellence" Your Trusted Partner in Excellence" Your Trusted Partner in Excellence" Your Trusted Partner in Excellence" Your Trusted Partner in Excellence"  reflects our unwavering commitment to building long-lasting relationships with our clients by delivering superior quality, innovative solutions, and unmatched reliability in every aspect of our service.
            </p>
            
            <div>
                <button
                    className="p-2 relative overflow-hidden border border-white text-black mt-2 cursor-pointer group"
                    style={{ borderRadius: '0' }}
                >
                    {/* Background Span */}
                    <span className="absolute inset-0 bg-[#d35400] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 z-0 group-hover:border-white"></span>
                    {/* Text */}
                    <span className=" text-blue-700 relative z-10 transition-colors duration-300 group-hover:text-white group-hover:border-white group-hover:underline">
                        Find Out More &#x2192;
                    </span>
                </button>
                
                    
            </div>
        </div>
        <div className=' w-2/3'>
            <img 
                src={TrustPic}
                alt="" 
                className='w-full object-cover rounded-md '/>
        </div>
        
    </div>
  )
}

export default Trust