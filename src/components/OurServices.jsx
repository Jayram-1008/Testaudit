import { AuditOutlined, LaptopOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons'
import React from 'react'
import { AiOutlineLaptop, AiTwotoneTool } from 'react-icons/ai'
import { BiSupport } from "react-icons/bi";
import { LiaDigitalTachographSolid } from "react-icons/lia";

const OurServices = () => {
  return (
    <div className='flex justify-center m-3  '>
    <div className=' p-7  w-full md:w-5/6'>
        <div className='flex flex-col gap-7 '>
            <div>
                <h3 className='text-[#D35400] font-bold underline mb-2.5 text-center text-2xl'>
                    GREAT JOURNEY FOR IT SOLUTIONS
                </h3>
                <h1 className='text-4xl font-bold text-[#fff] text-center' >SPECIALIZES IN BUILDING SERVICES</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* 1 */}
                <div className='flex gap-3 p-5 shadow-lg border rounded-lg bg-white group relative overflow-hidden'>
                    <div
                        className='absolute top-0 left-0 h-full bg-[#d35400] group-hover:w-1/20 transition-all duration-300 ease-in-out w-0'
                        style={{ zIndex: 0 }}
                    ></div>
                    <div className='relative z-10'>
                        <SettingOutlined
                            style={{
                                fontSize: '40px',
                                color: '#d35400',
                                transition: 'transform 0.3s ease',
                            }}
                            className='group-hover:scale-110'
                        />
                    </div>
                    <div className='relative z-10'>
                        <h1 className='font-semibold underline mb-1'>Professional Service</h1>
                        <p className='text-sm text-gray-600'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium corporis alias, atque ullam fuga ab
                            quaerat corrupti facere maxime!
                        </p>
                    </div>
                </div>
                {/* 2 */}
                <div className='flex gap-3 p-5 shadow-lg border rounded-lg bg-white group relative overflow-hidden'>
                    <div
                        className='absolute top-0 left-0 h-full bg-[#d35400] group-hover:w-1/20 transition-all duration-300 ease-in-out w-0'
                        style={{ zIndex: 0 }}
                    ></div>
                    <div className='relative z-10'>
                        <TeamOutlined
                            style={{
                                fontSize: '40px',
                                color: '#d35400',
                                transition: 'transform 0.3s ease',
                            }}
                            className='group-hover:scale-110'
                        />
                    </div>
                    <div className='relative z-10'>
                        <h1 className='font-semibold underline mb-1'>Experience Team</h1>
                        <p className='text-sm text-gray-600'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium corporis alias, atque ullam fuga ab
                            quaerat corrupti facere maxime!
                        </p>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex gap-3 p-5 shadow-lg border rounded-lg bg-white group relative overflow-hidden'>
                    <div
                        className='absolute top-0 left-0 h-full bg-[#d35400] group-hover:w-1/20 transition-all duration-300 ease-in-out w-0'
                        style={{ zIndex: 0 }}
                    ></div>
                    <div className='relative z-10'>
                        <LaptopOutlined
                            style={{
                                fontSize: '40px',
                                color: '#d35400',
                                transition: 'transform 0.3s ease',
                            }}
                            className='group-hover:scale-110'
                        />
                    </div>
                    <div className='relative z-10'>
                        <h1 className='font-semibold underline mb-1'>Best IT Solutions</h1>
                        <p className='text-sm text-gray-600'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium corporis alias, atque ullam fuga ab
                            quaerat corrupti facere maxime!
                        </p>
                    </div>
                </div>
                {/* 4 */}
                <div className='flex gap-3 p-5 shadow-lg border rounded-lg bg-white group relative overflow-hidden'>
                    <div
                        className='absolute top-0 left-0 h-full bg-[#d35400] group-hover:w-1/20 transition-all duration-300 ease-in-out w-0'
                        style={{ zIndex: 0 }}
                    ></div>
                    <div className='relative z-10'>
                        <AuditOutlined
                            style={{
                                fontSize: '40px',
                                color: '#d35400',
                                transition: 'transform 0.3s ease',
                            }}
                            className='group-hover:scale-110'
                        />
                    </div>
                    <div className='relative z-10'>
                        <h1 className='font-semibold underline mb-1'>Audit Service</h1>
                        <p className='text-sm text-gray-600'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium corporis alias, atque ullam fuga ab
                            quaerat corrupti facere maxime!
                        </p>
                    </div>
                </div>
                {/* 5 */}
                <div className='flex gap-3 p-5 shadow-lg border rounded-lg bg-white group relative overflow-hidden'>
                    <div
                        className='absolute top-0 left-0 h-full bg-[#d35400] group-hover:w-1/20 transition-all duration-300 ease-in-out w-0'
                        style={{ zIndex: 0 }}
                    ></div>
                    <div className='relative z-10'>
                        <BiSupport
                            style={{
                                fontSize: '40px',
                                color: '#d35400',
                                transition: 'transform 0.3s ease',
                            }}
                            className='group-hover:scale-110'
                        />
                    </div>
                    <div className='relative z-10'>
                        <h1 className='font-semibold underline mb-1'>24X7 Support</h1>
                        <p className='text-sm text-gray-600'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium corporis alias, atque ullam fuga ab
                            quaerat corrupti facere maxime!
                        </p>
                    </div>
                </div>
                {/* 6 */}
                <div className='flex gap-3 p-5 shadow-lg border rounded-lg bg-white group relative overflow-hidden'>
                    <div
                        className='absolute top-0 left-0 h-full bg-[#d35400] group-hover:w-1/20 transition-all duration-300 ease-in-out w-0'
                        style={{ zIndex: 0 }}
                    ></div>
                    <div className='relative z-10'>
                        <LiaDigitalTachographSolid
                            style={{
                                fontSize: '40px',
                                color: '#d35400',
                                transition: 'transform 0.3s ease',
                            }}
                            className='group-hover:scale-110'
                        />
                    </div>
                    <div className='relative z-10'>
                        <h1 className='font-semibold underline mb-1'>Digital Marketing </h1>
                        <p className='text-sm text-gray-600'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium corporis alias, atque ullam fuga ab
                            quaerat corrupti facere maxime!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

  )
}

export default OurServices