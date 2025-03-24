import React, { useState, useEffect } from 'react';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { TbHeartStar } from 'react-icons/tb';
import { GoProjectSymlink } from 'react-icons/go';
import { FaAward } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import counterBg from '../assets/counterBg.jpg';

const Counter = () => {
  const [counters, setCounters] = useState({
    customers: 0,
    reviews: 0,
    projects: 0,
    awards: 0,
  });

  const [ref, inView] = useInView({
    threshold: 0.3, // Trigger when 30% of the component is visible
    triggerOnce: true, // Trigger only once
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCounters((prev) => {
          const newValues = {
            customers: Math.min(prev.customers + 500, 122332),
            reviews: Math.min(prev.reviews + 400, 122332),
            projects: Math.min(prev.projects + 300, 122332),
            awards: Math.min(prev.awards + 200, 122332),
          };

          if (
            newValues.customers === 122332 &&
            newValues.reviews === 122332 &&
            newValues.projects === 122332 &&
            newValues.awards === 122332
          ) {
            clearInterval(interval);
          }

          return newValues;
        });
      }, 20); // Adjust the interval speed for smoother animation
    }
  }, [inView]);

  return (
    <div
      className="w-full bg-cover bg-center relative p-5"
      style={{ backgroundImage: `url(${counterBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <h1 className="text-3xl text-[#d35400] relative text-center underline font-bold">
        We Are Good in Number
      </h1>

      {/* Content */}
      <div ref={ref} className="relative z-10 flex flex-wrap justify-center items-center gap-20 py-16">
        <div className="flex items-center flex-col">
          <RiEmotionHappyLine
            style={{
              fontSize: '70px',
              color: '#d35400',
              background: '#fff',
              borderRadius: '50%',
              padding: '8px',
            }}
          />
          <h1 className="text-white font-bold text-3xl">{counters.customers} +</h1>
          <p className="text-white font-bold text-xl">Happy Customer</p>
        </div>
        <div className="flex items-center flex-col">
          <TbHeartStar
            style={{
              fontSize: '70px',
              color: '#d35400',
              background: '#fff',
              borderRadius: '50%',
              padding: '8px',
            }}
          />
          <h1 className="text-white font-bold text-3xl">{counters.reviews} +</h1>
          <p className="text-white font-bold text-xl">Star Work Reviews</p>
        </div>
        <div className="flex items-center flex-col">
          <GoProjectSymlink
            style={{
              fontSize: '70px',
              color: '#d35400',
              background: '#fff',
              borderRadius: '50%',
              padding: '8px',
            }}
          />
          <h1 className="text-white font-bold text-3xl">{counters.projects} +</h1>
          <p className="text-white font-bold text-xl">Project Complete</p>
        </div>
        <div className="flex items-center flex-col">
          <FaAward
            style={{
              fontSize: '70px',
              color: '#d35400',
              background: '#fff',
              borderRadius: '50%',
              padding: '8px',
            }}
          />
          <h1 className="text-white font-bold text-3xl">{counters.awards} +</h1>
          <p className="text-white font-bold text-xl">Win Of Award</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
