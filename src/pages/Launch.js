import React from 'react';
import { Layout } from 'antd';
import Navigation from '../components/Navigation';
import { Outlet, useParams } from "react-router-dom";

const { Header, Content } = Layout;

export default function Launch(props) {
  let { launchid } = useParams();
  const [data, setLaunchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(launchid);

  return (
    <Layout className="Notfound">
      <Header className="Notfound-header">
        <Navigation />
      </Header>
      <Content className="Notfound-body">
        <div className="Notfound-body">
          <h1>Launch {launchid}</h1>
          <Outlet />
        </div>
      </Content>
    </Layout>
  )
}
