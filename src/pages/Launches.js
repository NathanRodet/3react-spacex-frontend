import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation';
import getLaunches from '../api/getLaunches';
import LaunchesList from '../components/LaunchesList';
import '../styles/pages/launches.css';
import { Layout } from 'antd';

const { Header, Content } = Layout;

export default function Launches() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getLaunchesData();
    return () => {
      setData([]);
    };
  }, [])

  const getLaunchesData = async () => {
    setIsLoading(true);
    try {
      const x = await getLaunches();
      setData(x)
    } catch (e) {
      console.log(e)
    }
    setIsLoading(false);
  }

  return (
    <Layout>
      <Header className="Notfound-header">
        <Navigation />
      </Header>
      <Content>
        <h1 id="Launches-head">Launches</h1>
        <LaunchesList launches={data} loading={isLoading} />
      </Content>
    </Layout>
  )
}
