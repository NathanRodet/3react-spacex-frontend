import React from 'react'
import Navigation from '../components/Navigation';
import NotfoundLogo from '../media/NotfoundLogo.png';
import '../styles/pages/notfound.css';
import { Layout } from 'antd';

const { Header, Content } = Layout;

export default function Notfound() {
  return (
    <Layout className="Notfound">
      <Header className="Notfound-header">
        <Navigation />
      </Header>
      <Content className="Notfound-body">
        <div className="Notfound-body">
          <img id="Notfound-img" src={NotfoundLogo} alt="Notfound-img" />
        </div>
      </Content>
    </Layout>
  )
}
