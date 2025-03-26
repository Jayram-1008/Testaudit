import React, { useState, useEffect } from 'react';
import logo from '../assets/logo/auditra.png';
import { CloseCircleFilled, DownOutlined } from '@ant-design/icons';
import { GoSearch } from 'react-icons/go';
import { TbWorld } from 'react-icons/tb';
import { IoPerson } from 'react-icons/io5';

import { Button, Drawer, Space } from 'antd';
import CollapseSubMenu from './CollapseSubMenu';
import LanguageDrawer from '../utils/LanguageDrawer';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentSubmenu, setCurrentSubmenu] = useState(null); // Track the current submenu

  const showDrawer = (label) => {
    setCurrentSubmenu(label); // Set the submenu label
    setOpen(true); // Open the drawer
  };

  const onClose = () => {
    setOpen(false); // Close the drawer
    setCurrentSubmenu(null); // Reset the submenu label
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-500 transition-all duration-300 h-20 px-20 py-3 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="navContainer flex justify-between items-center">
        {/* Logo */}
        <div className="w-1/9 h-full bg-black">
          <img src={logo} className="w-full h-full object-cover" alt="Logo" />
        </div>

        {/* Navigation Links (Manually Written) */}
        <div className="flex gap-6 relative">
          {/* Insight */}
          <div className="relative group">
            <div
              className={`flex items-center gap-0.5 text-lg cursor-pointer transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              } hover:text-[#d35400]`}
              onClick={() => showDrawer('Insight')}
            >
              Insight <DownOutlined className="mt-1" />
            </div>
          </div>

          {/* Services */}
          <div className="relative group">
            <div
              className={`flex items-center gap-0.5 text-lg cursor-pointer transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              } hover:text-[#d35400]`}
              onClick={() => showDrawer('Services')}
            >
              Services <DownOutlined className="mt-1" />
            </div>
          </div>

          {/* Industries */}
          <div className="relative group">
            <div
              className={`flex items-center gap-0.5 text-lg cursor-pointer transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              } hover:text-[#d35400]`}
              onClick={() => showDrawer('Industries')}
            >
              Industries <DownOutlined className="mt-1" />
            </div>
          </div>

          {/* Careers */}
          <div className="relative group">
            <div
              className={`flex items-center gap-0.5 text-lg cursor-pointer transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              } hover:text-[#d35400]`}
              onMouseOver={() => showDrawer('Careers')}
            >
              Careers <DownOutlined className="mt-1" />
            </div>
          </div>

          {/* About Us */}
          <div className="relative group">
            <div
              className={`flex items-center gap-0.5 text-lg cursor-pointer transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              } hover:text-[#d35400]`}
            >
              About Us
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-1 text-lg cursor-pointer transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            } hover:text-[#d35400]`}
          >
            <GoSearch /> Search
          </div>
          <div>
            <LanguageDrawer/>
          </div>
          <div
            className={`flex items-center gap-1 text-lg cursor-pointer transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            } hover:text-[#d35400]`}
          >
            <IoPerson /> Me
          </div>
        </div>
      </div>

      {/* Drawer */}
      <Drawer
        title={currentSubmenu ? `${currentSubmenu} Submenu` : 'Submenu'}
        placement="top"
        width={500}
        onClose={onClose}
        open={open}
        extra={<CloseCircleFilled onClick={onClose} style={{fontSize:'30px'}}/>}
        style={{background:'#001529', color:'white'}}
      >
        {currentSubmenu ? (
          <div
          className="bg-[#001529]"
        >
          <div className="flex  justify-between gap-6">
            {/* Left Section */}
            <div className="w-1/5">
              <h1 className="text-xl text-white font-semibold mb-2">Industries</h1>
              <p className="text-lg text-white leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore eos laudantium quia sunt error nemo doloribus nulla sequi.
              </p>
              <button
                className="p-2 relative overflow-hidden border border-white text-black mt-4 cursor-pointer group"
                style={{ borderRadius: '0' }}
              >
                {/* Background Span */}
                <span className="absolute inset-0 bg-[#d35400] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 z-0"></span>
                {/* Text */}
                <span className="text-white relative z-10 transition-colors duration-300 group-hover:text-white group-hover:underline">
                  Find Out More &#x2192;
                </span>
              </button>
            </div>
    
            {/* Center Section (Collapse Menu) */}
            <div className="w-1/3">
              <CollapseSubMenu />
            </div>
    
            {/* Right Section (Optional) */}
              <div className="w-1/3">
                <h1 className="text-xl text-white font-semibold mb-2">Industries</h1>
                <p className="text-lg text-white leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore eos laudantium quia sunt error nemo doloribus nulla sequi.
                </p>
                <button
                  className="p-2 relative overflow-hidden border border-white text-black mt-4 cursor-pointer group"
                  style={{ borderRadius: '0' }}
                >
                  {/* Background Span */}
                  <span className="absolute inset-0 bg-[#d35400] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 z-0"></span>
                  {/* Text */}
                  <span className="text-white relative z-10 transition-colors duration-300 group-hover:text-white group-hover:underline">
                    Find Out More &#x2192;
                  </span>
                </button>
              </div>
          </div>
        </div>
        ) : (
          <p>No submenu content available.</p>
        )}
      </Drawer>
    </div>
  );
};

export default Navbar;
