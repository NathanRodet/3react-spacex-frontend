import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from "react-router-dom";
import Navigation from '../components/Navigation';
import getLaunchById from '../api/getLaunchById';
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
    console.log(launchData);
  }

  return (
    <Layout className="Launch">
      <Header className="Launch-header">
        <Navigation />
      </Header>
      <Content className="Launch-body">
        <div className="Launch-body">
          <h1 id="Launch-head">Launch {launchid} - {(launchData.mission_name) ? launchData.mission_name : "No mission name detected"}</h1>
          <div className="Launch-card">
            <LaunchDetails launch={launchData} isLoading={isLoading} />
          </div>
        </div>
      </Content>
    </Layout>
  )
}
