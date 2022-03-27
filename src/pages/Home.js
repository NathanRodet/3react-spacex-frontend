import React, { useEffect, useState } from 'react'
import '../styles/pages/home.css';
import Navigation from '../components/Navigation';
import NextLaunchCard from '../components/NextLaunchCard';
import PastLaunchesCards from '../components/PastLaunchesCards';
import getNextLaunch from '../api/getNextLaunch';
import getPastLaunches from '../api/getPastLaunches';
import { Layout } from 'antd';

const { Header, Content } = Layout;

export default function Home() {
  const [nextLaunchData, setNextLaunchData] = useState([]);
  const [pastLaunchesData, setPastLaunchesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
    return () => {
      setPastLaunchesData([]);
      setNextLaunchData([]);
    };
  }, [])

  const getData = async () => {
    setIsLoading(true);
    try {
      const y = await getPastLaunches();
      const x = await getNextLaunch();
      setPastLaunchesData(y);
      setNextLaunchData(x);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }

  return (
    <Layout>
      <Header>
        <Navigation />
      </Header>
      <Content className="Home-content">
        <h1 id="Home-head">Next launch</h1>
        <div className="Home-nextLaunch">
          <NextLaunchCard nextLaunch={nextLaunchData} loading={isLoading} />
        </div>
        <h1 id="Home-head">Last launches</h1>
        <div className="Home-pastlaunches">
          <PastLaunchesCards pastLaunches={pastLaunchesData} loading={isLoading} />
        </div>
      </Content>
    </Layout>
  )
}
