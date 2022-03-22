import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation';
import '../styles/pages/launches.css';
import LaunchesList from '../components/LaunchesList';
import WithListLoading from '../components/WithListLoading';
import { Pagination } from 'antd';

export default function Launches() {

  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const ListLoading = WithListLoading(LaunchesList);

  const fetchLaunches = async () => {
    const response = await fetch(`https://api.spacex.land/rest/launches?&offset=${offset}&limit=10`);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const Launches = await response.json();
    setData(Launches);
    setIsLoading(false);
    // console.log(Launches);
    return Launches;
  }

  useEffect((offset) => {
    const x = fetchLaunches(offset);
    // console.log(x);
    setData(x);
  }, [])

  const myPageChangedCallback = (pageNumber) => {
    setOffset((pageNumber * 10) - 10)
    const x = fetchLaunches(offset);
    setData(x)
  }

  async function nextLaunches() {
    setIsLoading(true)
    console.log(offset);
    setOffset((offset) => (offset + 10))
    const x = await fetchLaunches(offset);
    setData(x);
    return offset
  }

  async function lastLaunches() {
    if (offset >= 10) {
      setIsLoading(true)
      setOffset((prev) => (prev - 10));
      const x = await fetchLaunches(offset);
      setData(x);
    }
  }

  return (
    <div className="Launches">
      <div className="Launches-header">
        <Navigation />
      </div>
      <div className="Launches-body">
        <h1>Launches</h1>
        <div className="Launches-button">
          <button onClick={() => (lastLaunches)}> Previous Page </button>
          <button onClick={nextLaunches}> Next Page </button>
          <Pagination defaultCurrent={1} total={50} />

        </div>
        <ListLoading isLoading={isLoading} launches={data} />
        <div className="Launches-button">
          <button onClick={() => (lastLaunches)}> Previous Page </button>
          <button onClick={nextLaunches}> Next Page </button>
        </div>
      </div>
    </div>
  )
}
