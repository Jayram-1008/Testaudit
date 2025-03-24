import React from 'react';
import { thinkData } from '../utils/data';

const OurThinking = () => {
  return (
    <div className="w-full px-5 md:px-20 py-8">
      <h1 className="text-[#fff] text-3xl font-bold mb-3">Our latest <span className='text-[#d35400]'>thinking</span></h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {thinkData.map((item, index) => (
         <div
         key={index}
         className="cursor-pointer group flex gap-1 flex-col w-full md:w-102 h-100 bg-[#001529] p-3 rounded-md transition-shadow duration-300 hover:shadow-[0px_19px_38px_rgba(203,121,67,0.3),_0px_15px_12px_rgba(203,121,67,0.22)]"
       >
         <div className="overflow-hidden h-1/2 bg-[#001529] flex justify-center">
           <img
             src={item.img}
             alt={item.title}
             className="w-[100%] rounded-[20px_10px] object-center object-cover transition-transform duration-300 group-hover:scale-105"
           />
         </div>
         <div className="flex flex-col gap-3 flex-1 justify-evenly">
           <h2 className="text-white mb-2 transition-all duration-300 group-hover:underline group-hover:text-orange-600">
             {item.title}
           </h2>
           <p className="text-gray-600 text-sm line-clamp-3">{item.subTitle}</p>
           <p className="text-sm text-gray-500">
             {item.date} | <span className="font-semibold text-gray-400">{item.author}</span>
           </p>
         </div>
       </div>
       
       
        ))}
      </div>
    </div>
  );
};

export default OurThinking;
