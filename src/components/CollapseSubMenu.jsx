import React from 'react';
import { Collapse } from 'antd';
// import './CollapseSubMenu.css'; // Import your custom CSS
import { DownCircleFilled, PlusCircleFilled, PlusOutlined } from '@ant-design/icons';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: '1',
    label: <span className="text-white">This is panel header 1</span>,
    children: <p className=''>{text}</p>,
    extra: <span className='text-white'><PlusCircleFilled /></span>
  },
  {
    key: '2',
    label: <span className="text-white">This is panel header 2</span>,
    children: <p>{text}</p>,
    extra: <span className='text-white'><PlusCircleFilled /></span>
  },
  {
    key: '3',
    label: <div className="text-white">This is panel header 3</div>,
    children: <p>{text}</p>,
    extra: <span className='text-white'><PlusCircleFilled /></span>
  },
];

const CollapseSubMenu = () => (
  <Collapse
    accordion
    items={items}
    size='large'
    showArrow={true}
    expandIcon={({ isActive }) => (
      <div
        className={`arrow ${isActive ? 'active' : ''} `}
        style={{  }}
      />
    )}
  />
);

export default CollapseSubMenu;
