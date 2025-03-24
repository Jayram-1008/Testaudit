import { IoConstructOutline } from "react-icons/io5";
import { GrSystem } from "react-icons/gr";
import { IoLogoAppleAr } from "react-icons/io5";
import { SiJsonwebtokens } from "react-icons/si";

import React from 'react'

const PopularServices = () => {
  return (
    <div className='px-5 md:px-20 py-18 mt-15'>
        <div className='flex gap-7 flex-col md:flex-row  '>
            <div className='w-full md:w-1/3 flex flex-col gap-3'>
                <h1 className='underline text-2xl text-[#d35400]'>OUR  POPULAR SERVICES</h1>
                <h1 className='text-3xl font-bold text-white'>BEST PROFESSIONAL IT SOLUTION</h1>
                <p className='text-justify text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita totam quasi molestiae, odit rerum nesciunt quo, sunt assumenda maiores obcaecati aliquid, dignissimos debitis voluptates perferendis necessitatibus harum impedit! Sapiente, explicabo?</p>
                <button className='bg-[#d35400] text-white p-3 rounded-md f-full md:w-2/3 underline cursor-pointer'>EXPLORE MORE SERVICES</button>
            </div>
            <div className='w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2'>
                
                    {/* first card */}
                    <div className="flex gap-3 p-5 group relative overflow-hidden border-1 md:border-r-2">
                        <div className="relative z-10 icon-container">
                            <IoConstructOutline
                            style={{
                                fontSize: "40px",
                                color: "#d35400",
                            }}
                            className="icon"
                            />
                        </div>
                        <div className="relative z-10">
                            <h1 className="font-semibold underline mb-1 text-white group-hover:text-[#d35400]">
                            INFRASTRUCTURE
                            </h1>
                            <p className="text-sm text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium corporis alias, atque ullam fuga ab
                            quaerat corrupti facere maxime!
                            </p>
                        </div>
                    </div>
                    {/* 2 card */}
                    <div className="flex gap-3 p-5 group relative overflow-hidden border-1 md:border-0">
                        <div className="relative z-10 icon-container">
                            <SiJsonwebtokens
                            style={{
                                fontSize: "40px",
                                color: "#d35400",
                            }}
                            className="icon"
                            />
                        </div>
                        <div className="relative z-10">
                            <h1 className="font-semibold underline mb-1 text-white group-hover:text-[#d35400]">
                            WEB DEVELOPMENT
                            </h1>
                            <p className="text-sm text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium corporis alias, atque ullam fuga ab
                            quaerat corrupti facere maxime!
                            </p>
                        </div>
                    </div>
                
                    {/* 3rd card */}
                    <div className="flex gap-3 p-5 group relative overflow-hidden border-1 md:border-r-2 md:border-t-2">
                        <div className="relative z-10 icon-container">
                            <GrSystem
                            style={{
                                fontSize: "40px",
                                color: "#d35400",
                            }}
                            className="icon"
                            />
                        </div>
                        <div className="relative z-10">
                            <h1 className="font-semibold underline mb-1 text-white group-hover:text-[#d35400]">
                            IT ENGINEERING
                            </h1>
                            <p className="text-sm text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium corporis alias, atque ullam fuga ab
                            quaerat corrupti facere maxime!
                            </p>
                        </div>
                    </div>
                    {/* 4th card */}
                    <div className="flex gap-3 p-5 group relative overflow-hidden border-1 md:border-t-2">
                        <div className="relative z-10 icon-container">
                            <IoLogoAppleAr
                            style={{
                                fontSize: "40px",
                                color: "#d35400",
                            }}
                            className="icon"
                            />
                        </div>
                        <div className="relative z-10">
                            <h1 className="font-semibold underline mb-1 text-white group-hover:text-[#d35400]">
                            APPS DEVELOPMENT
                            </h1>
                            <p className="text-sm text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium corporis alias, atque ullam fuga ab
                            quaerat corrupti facere maxime!
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default PopularServices