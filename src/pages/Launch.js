import React from 'react';
import { Layout } from 'antd';
import Navigation from '../components/Navigation';

const { Header, Content } = Layout;

export default function LaunchDetails(props) {
  const { launch } = props;
  console.log(launch);

  return (
    <Layout className="Notfound">
      <Header className="Notfound-header">
        <Navigation />
      </Header>
      <Content className="Notfound-body">
        <div className="Notfound-body">

        </div>
      </Content>
    </Layout>
  )
}
