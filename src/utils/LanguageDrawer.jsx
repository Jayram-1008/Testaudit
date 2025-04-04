import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { DownOutlined, GlobalOutlined } from '@ant-design/icons';
const LanguageDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="link" onClick={showDrawer} icon={<GlobalOutlined />}>
        IN-EN <DownOutlined/>
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default LanguageDrawer;