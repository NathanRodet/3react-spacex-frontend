import React from 'react'
import '../styles/pages/home.css';
import Navigation from '../components/Navigation';
import { Layout } from 'antd';

const { Header, Content } = Layout;

export default function Home() {

  return (
    <div>
      <Layout>
        <Header>
          <Navigation />
        </Header>
        <Content>
          hello
        </Content>
      </Layout>
    </div>

  )
}
