import React from 'react'
import WhyChoosePic from '../assets/9604605.jpg'
import { CircleGrid } from "react-awesome-shapes";

const WhyChoseUs = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between px-5 md:px-20  mt-10  gap-6'>
        <div className='w-full md:w-1/2 relative'>
            <h2 className='hidden md:flex text-4xl font-bold underline text-white uppercase  '>Why Choose 
                <span style={{color:'#d35400', }}>
                    &nbsp;Us 
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><g><path fill="#d35400" d="M7 3H17V7.2L12 12L7 7.2V3Z"><animate id="eosIconsHourglass0" fill="#d35400" attributeName="opacity" begin="0;eosIconsHourglass1.end" dur="2s" from="1" to="0"/></path><path fill="currentColor" d="M17 21H7V16.8L12 12L17 16.8V21Z"><animate fill="freeze" attributeName="opacity" begin="0;eosIconsHourglass1.end" dur="2s" from="0" to="1"/></path><path fill="currentColor" d="M6 2V8H6.01L6 8.01L10 12L6 16L6.01 16.01H6V22H18V16.01H17.99L18 16L14 12L18 8.01L17.99 8H18V2H6ZM16 16.5V20H8V16.5L12 12.5L16 16.5ZM12 11.5L8 7.5V4H16V7.5L12 11.5Z"/><animateTransform id="eosIconsHourglass1" attributeName="transform" attributeType="XML" begin="eosIconsHourglass0.end" dur="0.5s" from="0 12 12" to="180 12 12" type="rotate"/></g></svg>
            </h2>
            <br />
            <ul className='text-white'>
                <li><b>Unparalleled Expertise:</b> With a team of seasoned professionals, we bring extensive experience and knowledge to every project.</li>
                <li><b>Customer-Centric Approach:</b> Your needs are at the heart of everything we do. We tailor our solutions to align with your goals and ensure your satisfaction.</li>
                <li><b>Proven Results:</b> Our portfolio of successful projects and glowing testimonials speaks for itself.</li>
                <li><b>Innovation & Adaptability:</b> We embrace modern tools and practices to stay ahead in an ever-evolving landscape.</li>
                <li><b>Commitment to Quality:</b> We prioritize excellence in every service, ensuring top-notch results for our clients.</li>
                <li><b>Long-Term Partnerships:</b> We believe in building lasting relationships with our clients, offering continued support and trust.</li>

            </ul>
            <div className=''>
                <button
                    className="p-2 relative overflow-hidden border border-white text-black mt-2 cursor-pointer group"
                    style={{ borderRadius: '0' }}
                >
                    {/* Background Span */}
                    <span className="absolute inset-0 bg-[#d35400] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 z-0 group-hover:border-white"></span>
                    {/* Text */}
                    <span className=" text-white relative z-10 transition-colors duration-300 group-hover:text-white group-hover:border-white group-hover:underline">
                        Find Out More &#x2192;
                    </span>
                </button>                       
            </div>
            <div className='hidden xl:flex justify-between gap-8 absolute bottom-0 ' >
                    <CircleGrid
                        position="relative"
                        color="#d35400"
                        size="130px"
                        zIndex={20}
                    />
                    <CircleGrid
                        position="relative"
                        color="#d35400"
                        size="110px"
                        zIndex={20}
                    />
                    <CircleGrid
                        position="relative"
                        color="#d35400"
                        size="90px"
                        zIndex={20}
                    />
                    <CircleGrid
                        position="relative"
                        color="#d35400"
                        size="70px"
                        zIndex={20}
                    />
                    <CircleGrid
                        position="relative"
                        color="#d35400"
                        size="50px"
                        zIndex={20}
                    />
                </div> 
        </div>
        <div className='w-full md:w-1/2 '>
            <h2 className='md:hidden flex items-center justify-center text-3xl font-bold underline text-white uppercase '>Why Choose 
                <span style={{color:'#d35400', }}>
                    &nbsp;Us 
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><g><path fill="#d35400" d="M7 3H17V7.2L12 12L7 7.2V3Z"><animate id="eosIconsHourglass0" fill="#d35400" attributeName="opacity" begin="0;eosIconsHourglass1.end" dur="2s" from="1" to="0"/></path><path fill="currentColor" d="M17 21H7V16.8L12 12L17 16.8V21Z"><animate fill="freeze" attributeName="opacity" begin="0;eosIconsHourglass1.end" dur="2s" from="0" to="1"/></path><path fill="currentColor" d="M6 2V8H6.01L6 8.01L10 12L6 16L6.01 16.01H6V22H18V16.01H17.99L18 16L14 12L18 8.01L17.99 8H18V2H6ZM16 16.5V20H8V16.5L12 12.5L16 16.5ZM12 11.5L8 7.5V4H16V7.5L12 11.5Z"/><animateTransform id="eosIconsHourglass1" attributeName="transform" attributeType="XML" begin="eosIconsHourglass0.end" dur="0.5s" from="0 12 12" to="180 12 12" type="rotate"/></g></svg>
            </h2>
            <br />
            <img 
                src={WhyChoosePic}
                alt="" 
                className='w-full object-cover rounded-md  '/>
        </div>
    </div>
  )
}

export default WhyChoseUs