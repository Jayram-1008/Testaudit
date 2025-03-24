import React, { useState } from 'react'
import Logo from '../assets/auditrajpg.png'
import { Button, Flex, Menu, Space, Tooltip, Typography } from 'antd'
import { Avatar, Card, } from 'antd';

import { ContactsOutlined, DownOutlined, HomeOutlined, SearchOutlined } from '@ant-design/icons'
import Meta from 'antd/es/card/Meta';
import LanguageDrawer from '../utils/LanguageDrawer';
const Navbar = () => {
  return (
    <div className=' flex items-center justify-between bg-[#000]' style={{padding:'10px 30px',}}>
      <div className='flex justify-between bg-amber-100'>
        <div >
          <img src="https://www.auditra.in/data/files/auditrajpg.png" alt=""  style={{height:'50px',}}/>
        </div>
        <Menu
          style={{ background:'black'}}
          mode='horizontal'
          theme='dark'
          items={[
            {
              label: (
                <div >
                  Insights
                </div>
              ),
              key: 'insights',
            },
            {
              label: (
                <div >
                  Services
                </div>
              ),
              key: 'services', 
              children: [
                {
                  label: <MegaMenu />,
                  key: 'megamenu',
                  style: {
                    height: 'fit-content',
                    padding: 0,
                  },
                }
              ]
            },
            {
              label: (
                <div >
                  Industries
                </div>
              ),
              key: 'industries',
            },
            {
              label: (
                <div >
                  Careers
                </div>
              ),
              key: 'careers',
              children: [
                {
                  label: 'What can you do here ',
                  key: 'what_you_can_do_here'
                },
                {
                  label: 'How to Join Us ',
                  key: 'how_to_join_us'
                },
                {
                  label: 'Job Search ',
                  key: 'job_search',
                },

              ]
            },
            {
              label: 'About Us',
              key: 'about_us',
            },

          ]}>

        </Menu>
      </div>
      <Flex wrap gap="small" className='hidden md:block'>
        <Tooltip title="search">
          <Button shape="circle" type='link' icon={<SearchOutlined />} />
        </Tooltip>
        <Button shape='circle' type='link' icon={<ContactsOutlined />} size='middle'></Button>    
        <LanguageDrawer/>
      </Flex>

    </div>

  )
}

export default Navbar



const MegaMenu = () => {
  const [selectedKeys, setselectedKeys] = useState([]);

  const onMenuItemClick = (item) => {
    setselectedKeys([item.key]);
    console.log('Item was clicked', item.key);
  };

  return (
    <div
      style={{
        padding: '20px',
        background: '#001529',
        width: '100%',
        bottom: '10px',
      }}
    >
      <Typography.Title style={{ color: '#fff' }} level={2}>
        Services
      </Typography.Title>
      <Typography.Paragraph
        style={{
          color: '#fff',
          fontSize: '13px',
          lineHeight: '1.5',
          marginBottom: '20px',
        }}
      >
        At Auditra, we offer expert services in financial optimization,<br/> digital
        presence enhancement, and IT infrastructure streamlining <br />to drive your
        business success.
      </Typography.Paragraph>
      <Space
        direction="horizontal"
        size="large"
        wrap
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <Menu
          theme="dark"
          onClick={onMenuItemClick}
          selectedKeys={selectedKeys}
          items={[
            {
              label: 'Audits',
              key: 'audit',
              type: 'group',
            },
            {
              label: 'Comprehensive Audits',
              key: 'comprehensive-audit',
            },
            {
              label: 'Internal Controls Evaluation',
              key: 'internal-controls-evaluation',
            },
            {
              label: 'Regulatory Compliance',
              key: 'regulatory-compliance',
            },
            {
              label: 'Financial Reporting',
              key: 'financial-reporting',
            },
          ]}
          style={{
            boxShadow: 'none',
            borderRight: '1px solid black',
            fontSize: '16px',
            minWidth: '200px',
          }}
        />
        <Menu
          theme="dark"
          onClick={onMenuItemClick}
          selectedKeys={selectedKeys}
          items={[
            {
              label: 'Digital Marketing',
              key: 'digital-marketing',
              type: 'group',
            },
            {
              label: 'Search Engine Optimization (SEO)',
              key: 'seo',
            },
            {
              label: 'Pay-Per-Click (PPC) Advertising',
              key: 'ppc',
            },
            {
              label: 'Social Media Management',
              key: 'social-media-management',
            },
            {
              label: 'Content Creation',
              key: 'content-creation',
            },
            {
              label: 'Email Marketing',
              key: 'email-marketing',
            },
          ]}
          style={{
            boxShadow: 'none',
            borderRight: '1px solid black',
            fontSize: '16px',
            minWidth: '200px',
          }}
        />
        <Menu
          theme="dark"
          onClick={onMenuItemClick}
          selectedKeys={selectedKeys}
          items={[
            {
              label: 'IT Services',
              key: 'it-services',
              type: 'group',
            },
            {
              label: 'IT Consulting',
              key: 'it-consulting',
            },
            {
              label: 'Infrastructure Management',
              key: 'infrastructure-management',
            },
            {
              label: 'Cybersecurity Solutions',
              key: 'cybersecurity-solutions',
            },
            {
              label: 'Software Development',
              key: 'software-development',
            },
            {
              label: 'Technical Support',
              key: 'technical-support',
            },
          ]}
          style={{
            boxShadow: 'none',
            borderRight: '1px solid black',
            fontSize: '16px',
            minWidth: '200px',
          }}
        />
        
      </Space>
    </div>
  );
};


