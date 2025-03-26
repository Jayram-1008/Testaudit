import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
const InsightMenu = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = e => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        
        <button onClick={showDrawer}>opeb</button>
      </Space>
      <Drawer
        title="Drawer with extra actions"
        placement='top'
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
      <div
      className=""
    >
      <div className="flex flex-wrap justify-between gap-6">
        {/* Left Section */}
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

        {/* Center Section (Collapse Menu) */}
        <div className="w-1/3">
          <CollapseSubMenu />
        </div>

        {/* Right Section (Optional) */}
        <div className="w-1/3 text-white text-center">
          {/* Add any additional content here */}
        </div>
      </div>
    </div>
      </Drawer>
    </>
  );
};
export default InsightMenu;