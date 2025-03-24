import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import TeamSlider from './TeamSlider';
import img from '../assets/ratingBg2.jpg';

const Testimonial = () => {
  return (
    <div
      className="w-full px-5 md:px-20 py-10 mt-20"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Black Gradient Overlay */}
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

      <div className="mt-5  relative z-10">
        <h2 className="text-[#d35400] underline  text-xl md:text-2xl mb-3 text-center font-bold flex justify-center gap-1">
        <FaQuoteLeft size={24} />
          &nbsp;HAPPY CLIENTS SAY&nbsp;
          <FaQuoteLeft size={24} />
        </h2>
        <h1 className="text-white text-2xl md:text-4xl  text-center font-bold">
          WHAT OUR CUSTOMERS SAY ABOUT US
        </h1>
      </div>

      <div className="flex flex-col md:flex-row mt-5 md:mt-10  relative z-10">
        <div className="w-full md:w-1/2  ">
          {/* Review Quotes Section */}
          <div className="text-white text-lg italic">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nisl in leo gravida facilisis." 
              <br />- Client Name, IT Solutions
            </p>
            <p className="mt-6">
              "Duis vehicula erat ut mauris feugiat, et consectetur ex facilisis. Excellent services for digital marketing!" 
              <br />- Client Name, Digital Marketing
            </p>
            <p className="mt-6">
              "Aliquam at sapien ut ante tincidunt posuere. Audit services were top-notch and exceeded expectations." 
              <br />- Client Name, Audit Solutions
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2  mt-15 md:mt-0">
          {/* Slider Component */}
          <TeamSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
