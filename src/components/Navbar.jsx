import React, { useState, useEffect } from 'react';
import { servicesMenu, insightData, careersMenu, industriesMenu, about } from '../utils/menuData'; // Adjust the path as necessary
import logo from '../assets/logo/auditra.png';
import { GoSearch } from 'react-icons/go';
import { IoPerson } from 'react-icons/io5';
import { Drawer } from 'antd';
import CollapseSubMenu from './CollapseSubMenu';
import { FaChevronDown,  } from 'react-icons/fa';
import { ImCross } from "react-icons/im";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentSubmenu, setCurrentSubmenu] = useState(null);

  const menus = [insightData, servicesMenu, industriesMenu, careersMenu, about];

  const showDrawer = (menu) => {
    setCurrentSubmenu(menu);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setCurrentSubmenu(null);
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
        <div className="w-1/9 h-full bg-black">
          <img src={logo} className="w-full h-full object-cover" alt="Logo" />
        </div>

        <div className="flex gap-6 relative">
          {menus.map((menu, index) => (
            <div
              key={index}
              className={`flex items-center gap-1 cursor-pointer ${
                isScrolled ? 'text-black' : 'text-white'
              } hover:text-[#d35400]`}
              onClick={() => showDrawer(menu)}
            >
              {/* 1st menu from map and 2nd menu from raw data's option */}
              {menu.menu} <FaChevronDown/>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-1 text-lg cursor-pointer transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            } hover:text-[#d35400]`}
          >
            <GoSearch /> Search
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

      <Drawer
        placement="top"
        onClose={onClose}
        open={open}
        extra={<ImCross onClick={onClose} className='text-2xl cursor-pointer hover:text-red-700'/>}
        style={{
          background: '#001529',
          color: 'white',
          padding: '10px 20px',
          height: '70vh', // Fixed height for the drawer
        }}
      >
      <div className="flex justify-between h-full gap-10">
        {/* Left Section */}
        <div className="w-1/5 h-full flex flex-col">
          <h1 className="text-3xl">{currentSubmenu?.menu}</h1>
          <br />
          <p className="text-[17px] text-white text-justify">
            {currentSubmenu?.description}
          </p>
        </div>

        {/* Middle Scrollable Section */}
        <div className="w-3/5 h-full overflow-y-auto pr-4">
          {currentSubmenu?.submenu?.length > 0 ? (
            <CollapseSubMenu submenu={currentSubmenu.submenu} />
          ) : (
            <p>No submenu content available.</p>
          )}
        </div>

        {/* Right Section */}
        <div className="w-1/5 h-full flex flex-col ">
          <h1 className="text-3xl">{currentSubmenu?.menu}</h1>
          <br />
          <p className="text-[17px] text-white text-justify">
            {currentSubmenu?.description}
          </p>
        </div>
      </div>
      </Drawer>

    </div>
  );
};

export default Navbar;
