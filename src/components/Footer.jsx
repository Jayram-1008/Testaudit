import React from 'react'
import footerImg from '../assets/footer.jpg'
import logo from '../assets/logo/auditLogo.png'
import { Button } from 'antd'
import { SiFacebook } from "react-icons/si";
import { FaSquareInstagram, FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";
import { ImMail } from "react-icons/im";
import { FacebookFilled } from '@ant-design/icons';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full mt-10 bg-white'>
            <div className="h-full p-5 md:p-25 relative" style={{ backgroundImage: `url(${footerImg})`, backgroundSize: 'cover', backgroundPosition: 'center', }} >
                {/* Overlay */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))',
                        zIndex: 1,
                    }}
                ></div>

                {/* Content */}
                <div className=" h-full relative z-10 p-3 flex flex-col items-center justify-center tracking-wider ">
                    <h1 className="text-white text-center text-xl md:text-3xl font-bold">
                        Want to hook better leads with
                        hard- <br /> working <span className='text-[#d35400]'>tech solution</span>
                    </h1>
                    <br />
                    <button className=" cursor-pointer mt-4 px-4 py-2 bg-[#d35400] text-white text-[12px] md:text-lg font-bold rounded hover:bg-[#b03a00] transition">
                        GET A FREE CONSULTATION NOW
                    </button>
                </div>
            </div>
            {/* Footer part */}
            <div className='px-10 md:px-40 py-10 flex flex-col justify-center'>
                <div className='flex items-center flex-col gap-8'>
                    <img src="https://www.auditra.in/data/files/auditrajpg.png" className='w-44 mix-blend-multiply' alt="" />
                    <p className='text-black text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At illo minima amet consectetur adipisicing elit. At illo minima amet consectetur adipisicing elit. At illo minima libero deleniti porro aperiam nam sed quam quae voluptates neque quibusdam consectetur magnam, </p>
                </div>
                <div className='flex justify-center gap-7 mt-8'>
                    <button className="text-4xl cursor-pointer text-[#0066cc] hover:text-[#66b2ff] transition">
                        <FaFacebook />
                    </button>
                    <button className="text-4xl cursor-pointer text-black hover:text-[#637a8a] transition">
                        <FaSquareXTwitter />
                    </button>
                    <button className="text-4xl cursor-pointer text-[#ff0066] hover:text-[#ff99cc] transition">
                        <FaSquareInstagram />
                    </button>
                    <button className="text-4xl cursor-pointer text-red-600 hover:text-[#ff9999] transition">
                        <FaSquareYoutube />
                    </button>
                    <button className="text-4xl cursor-pointer text-[#EA4335] hover:text-[#ffacac] transition">
                        <ImMail />
                    </button>
                </div>
                <div>
                    <ul className='flex flex-wrap justify-between mt-8'>
                        <li><a href="">About</a></li>
                        <li><a href="">Need Help?</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Tearms of Use</a></li>
                    </ul>
                </div>
            </div>
            <div className='w-full bg-[#001529] px-4 py-3'>
                <h1 className='text-white text-center'>@ Copyright 1999-2025 by Refsnes Data. All Rights Reserved.</h1>
            </div>
        </div>
    )
}

export default Footer