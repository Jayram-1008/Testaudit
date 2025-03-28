import React from 'react';
import { Collapse } from 'antd';
import { FaChevronDown } from "react-icons/fa"; // Import a custom arrow icon
import { FaPlusCircle } from "react-icons/fa";

const CollapseSubMenu = ({ submenu }) => {
  const items = submenu.map((item, index) => {
    const hasChildren = item.children && item.children.length > 0;

    return {
      key: index.toString(),
      label: <p className="text-white text-lg">{item.title}</p>,
      extra: <FaPlusCircle style={{ color: 'white', fontSize: '20px' }} />,
      children: hasChildren ? (
        <div className="flex flex-col gap-2">
          {item.children.map((child, childIndex) => (
            <a
              key={childIndex}
              href={child.path}
              className="text-blue-100 no-underline hover:underline"
            >
              {child.title} &#8594;
            </a>
          ))}
        </div>
      ) : (
        <div className="">
          <p className="mb-2">{item.description} </p>
          <a href={item.path} className="border-1 border-black px-2 p-1">
            Know More &#8594;
          </a>
        </div>
      ),
    };
  });

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Collapse
      items={items}
      onChange={onChange}
      accordion
      expandIcon={({ isActive }) => (
        <FaChevronDown
          style={{
            color: 'white', // Change the color of the arrow here
            transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      )}
      style={{ background: '#001529', color: 'white' }}
    />
  );
};

export default CollapseSubMenu;
