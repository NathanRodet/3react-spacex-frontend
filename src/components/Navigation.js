import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, RocketOutlined } from '@ant-design/icons';
import '../styles/components/navigation.css';

export default function Navigation() {

  const [state, setState] = useState('home');

  const handleClick = e => {
    console.log('click ', e);
    setState(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[state]} mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link className="Navigation-link" activestyle="active" to="/"> Home </Link>
      </Menu.Item>
      <Menu.Item key="launches" icon={<RocketOutlined />}>
        <Link className="Navigation-link" activestyle="active" to="/Launches">Launches</Link>
      </Menu.Item>
    </Menu>
  )
}
