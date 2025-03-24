import React from 'react';

import Navbar from './Navbar';
import WhatWeOffer from './WhatWeOffer';
import Trust from './Trust';
import WhyChoseUs from './WhyChooseUs';
import Counter from './Counter';
import video from '../assets/v3.mp4'
import OurServices from './OurServices';
import OurThinking from './OurThinking';
import PopularPtnr from './PopularPtnr';
import PopularServices from './PopularServices';
import OurTeam from './OurTeam';
import WhoWeAre from './WhoWeAre';
import Testimonial from './Testimonial';
import WorkTogether from './WorkTogether';
import TeamSlider from './TeamSlider';
import TeamMember from './TeamMember';
import Footer from './Footer';
const Header = () => {
  return (
    <>
      <div className="header relative h-screen w-full">
        {/* Video Section */}
        <div className="w-full h-full">
          <video 
            src={video}
            muted
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
          ></video>
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        {/* Navbar Section */}
        <div className="nav absolute w-full top-0 z-10">
          <Navbar />
        </div>
        {/* Text content */}
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1 className="text-xl md:text-4xl font-bold leading-snug text-center text-white">
            Delivering Reliable Insights and Comprehensive Audits <br />
            to Empower Business Growth and Compliance
          </h1>
          <p className='text-[#d35400]'>To take your business to the New Heights</p>
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
      <OurServices/>
      <OurThinking/>
      <br />
      <br />
      <Counter/>
      <br />
      <br />
      <WhyChoseUs/>
      <PopularPtnr/>
      <PopularServices/>
      <WhoWeAre/>
      <OurTeam/>
      <Testimonial/>
      <WorkTogether/>
      <Footer/>
    </>
  );
};

export default Header;
