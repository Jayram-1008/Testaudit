import React from 'react';
import workTogetherImg from '../assets/work3.png';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";


import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const WorkTogether = () => {
  return (
    <>
    <div className="w-full relative">
        <br />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50 z-10"></div>
        <div className="relative flex justify-center gap-8 w-full h-[450px] p-2  ">
            { /* Image */}
            <img
                src={workTogetherImg}
                alt=""
                className="object-fill  w-1/2 md:w-1/3 h-[90%] md:h-full  text-white "
            />
            {/* Content with overlay */}
            <div className="  flex mt-4 justify-center overflow-hidden">
            {/* Text Content */}
                <h1 className=" text-white text-xl md:text-6xl font-bold  leading-8 md:leading-15.5 tracking-wider">
                    Starting a new <br />project or want <br />to collaborate <br />with us? 
                    <span className="text-[#d35400]">Let's talk!</span>
                </h1>

            </div>
        </div>
        <div className='w-full absolute bottom-0 bg-[#d35400]  p-4'>
            <h1 className='text-white text-2xl md:text-3xl font-bold text-center flex justify-center gap-2 items-center'>
                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><path fill="currentColor" d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21" opacity="0"><animate id="svgSpinnersWifi0" fill="freeze" attributeName="opacity" begin="0;svgSpinnersWifi1.end+0.2s" calcMode="discrete" dur="0.25s" values="0;1"/><animate id="svgSpinnersWifi1" fill="freeze" attributeName="opacity" begin="svgSpinnersWifi3.end+0.5s" dur="0.001s" values="1;0"/></path><path fill="currentColor" d="M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z" opacity="0"><animate id="svgSpinnersWifi2" fill="freeze" attributeName="opacity" begin="svgSpinnersWifi0.end" calcMode="discrete" dur="0.25s" values="0;1"/><animate fill="freeze" attributeName="opacity" begin="svgSpinnersWifi3.end+0.5s" dur="0.001s" values="1;0"/></path><path fill="currentColor" d="M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3" opacity="0"><animate id="svgSpinnersWifi3" fill="freeze" attributeName="opacity" begin="svgSpinnersWifi2.end" calcMode="discrete" dur="0.25s" values="0;1"/><animate fill="freeze" attributeName="opacity" begin="svgSpinnersWifi3.end+0.5s" dur="0.001s" values="1;0"/></path></svg></span>
                GET IN TOUCH
                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><path fill="currentColor" d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21" opacity="0"><animate id="svgSpinnersWifi0" fill="freeze" attributeName="opacity" begin="0;svgSpinnersWifi1.end+0.2s" calcMode="discrete" dur="0.25s" values="0;1"/><animate id="svgSpinnersWifi1" fill="freeze" attributeName="opacity" begin="svgSpinnersWifi3.end+0.5s" dur="0.001s" values="1;0"/></path><path fill="currentColor" d="M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z" opacity="0"><animate id="svgSpinnersWifi2" fill="freeze" attributeName="opacity" begin="svgSpinnersWifi0.end" calcMode="discrete" dur="0.25s" values="0;1"/><animate fill="freeze" attributeName="opacity" begin="svgSpinnersWifi3.end+0.5s" dur="0.001s" values="1;0"/></path><path fill="currentColor" d="M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3" opacity="0"><animate id="svgSpinnersWifi3" fill="freeze" attributeName="opacity" begin="svgSpinnersWifi2.end" calcMode="discrete" dur="0.25s" values="0;1"/><animate fill="freeze" attributeName="opacity" begin="svgSpinnersWifi3.end+0.5s" dur="0.001s" values="1;0"/></path></svg></span>
            </h1>
        </div>
    </div>
    <div className='w-full flex flex-col md:flex-row px-5 md:px-20 py-10'>
            <div className='w-full md:w-1/2'>
                <h1 className='text-white text-2xl uppercase'><i>We can ensure reliability, low cost fares and most important, with safety and comfort in mind.</i></h1>
                <ul className='text-white mt-4 list-none'>
                    <li className='flex items-center gap-1 text-xl mb-2'><FaLocationDot style={{fontSize:'29px'}}/> Banka Bihar, 813102</li>
                    <li className='flex items-center gap-1 text-xl mb-2'><FaPhoneAlt style={{fontSize:'29px'}}/> +91-9988552266, 8877665544</li>
                    <li className='flex items-center gap-1 text-xl mb-2'><RiWhatsappFill style={{fontSize:'29px'}}/> +91-9988552266, 8877665544</li>
                    <li className='flex items-center gap-1 text-xl'><MdEmail style={{fontSize:'29px'}}/> info.auditra@gmail.com</li>
                </ul>
            </div>
            <div className="flex flex-col w-full max-w-sm mx-auto mt-8">
                <label htmlFor="name" className="text-sm font-medium text-white mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="text-white p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    placeholder="Enter your name"
                />
                <br />
                <label htmlFor="name" className="text-sm font-medium text-white mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="text-white p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    placeholder="Enter your email"
                />
                <br />
                <label htmlFor="message" className="text-sm font-medium text-white mb-2">
                    Your Message
                </label>
                <textarea
                    id="message"
                    rows="4"
                    className="text-white p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
                    placeholder="Type your message here..."
                ></textarea>
                <br />
                <button className='bg-[#d35400] text-center p-2 rounded-lg text-white font-bold'>SUBMIT</button>
            </div>
        </div>
    </>
  );
};

export default WorkTogether;
