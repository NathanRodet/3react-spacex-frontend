import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, RocketOutlined } from '@ant-design/icons';
import '../styles/components/navigation.css';

export default function Navigation() {

  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link className="Navigation-link" to="/"> Home </Link>
      </Menu.Item>
      <Menu.Item key="launches" icon={<RocketOutlined />}>
        <Link className="Navigation-link" to="/Launches">Launches</Link>
      </Menu.Item>
    </Menu>
  )
}
