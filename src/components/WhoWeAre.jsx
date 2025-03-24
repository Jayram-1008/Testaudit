import React from 'react'
import TrustPic from '../assets/whoWer.jpg'
import { CircleGrid } from "react-awesome-shapes";

const WhoWeAre = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between px-5 md:px-20  mt-15 gap-0.5'>    
        <div className='w-full md:w-1/3'>
            <h2 className='hidden md:block text-white text-3xl md:text-4xl font-bold underline '>WHO  <span style={{color:'#d35400'}}>WE</span> ARE ?</h2>
            <br />
            <p className='text-white text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis enim perspiciatis est sint odio saepe provident, incidunt expedita laborum ipsa. Error laboriosam expedita temporibus facere ut odit laborum dolorum assumenda. Your Trusted Partner in Excellence" Your Trusted Partner in Excellence" Your Trusted Partner in Excellence" Your Trusted Partner in Excellence" Your Trusted Partner in Excellence" Your Trusted Partner in Excellence" Your Trusted Partner in Excellence" Your Trusted Partner in Excellence" Your Trusted Partner in Excellence"  reflects our unwavering commitment to building long-lasting relationships with our clients by delivering superior quality, innovative solutions, and unmatched reliability in every aspect of our service.
            </p>
            <br />
            <div>
                <button
                    className="p-2 w-full relative overflow-hidden border border-white text-black mt-2 cursor-pointer group"
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
        <div className=' w-full md:w-3/5'>
            <h2 className='block md:hidden text-white text-3xl md:text-4xl font-bold underline text-center'>WHO  <span style={{color:'#d35400'}}>WE</span> ARE ?</h2>
            <br />
            <img 
                src={TrustPic}
                alt="" 
                className='w-full object-cover rounded-md '/>
        </div>
        
    </div>
  )
}

export default WhoWeAre