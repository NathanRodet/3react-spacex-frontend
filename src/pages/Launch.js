import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import getLaunchById from '../api/getLaunchById';
import { useParams } from "react-router-dom";
import '../styles/pages/launch.css';
import { Layout } from 'antd';
import LaunchDetails from '../components/LaunchDetails';

const { Header, Content } = Layout;

export default function Launch() {
  let { launchid } = useParams();
  const [launchData, setLaunchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getLaunchData();
    return () => {
      setLaunchData([]);
    };
  }, [])

  const getLaunchData = async () => {
    setIsLoading(true);
    try {
      const x = await getLaunchById(launchid);
      setLaunchData(x);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  }

  return (
    <Layout className="Launch">
      <Header className="Launch-header">
        <Navigation />
      </Header>
      <Content className="Launch-body">
        <div className="Launch-body">
          <div className="Launch-card">
            <LaunchDetails launch={launchData} loading={isLoading} />
          </div>
        </div>
      </Content>
    </Layout>
  )
}
