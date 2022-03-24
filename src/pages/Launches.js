import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation';
import getLaunches from '../api/getLaunches';
import LaunchesList from '../components/LaunchesList'
import '../styles/pages/launches.css';

export default function Launches() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLaunchesData = async () => {
      setIsLoading(true);
      try {
        const x = await getLaunches();
        setData(x)
        console.log(x);

      } catch (e) {
        console.log(e)
      }
      setIsLoading(false);
    }
    getLaunchesData();
  }, [])

  return (
    <div className="Launches">
      <div className="Launches-header">
        <Navigation />
      </div>
      <div className="Launches-body">
        <h1>Launches</h1>
        <LaunchesList launches={data} loading={isLoading} />
      </div>
    </div>
  )
}
