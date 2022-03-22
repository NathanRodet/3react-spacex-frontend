import React, { useEffect, useState } from 'react'
import axios from 'axios'
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
  const url = "https://api.spacex.land/rest/launches"

  useEffect(() => {
    async function fetchData() {
      const x = await fetchLaunches(offset)
      setData(x)
    }
    fetchData()
    setIsLoading(false)
  }, [])

  const fetchLaunches = async () => {
    const Launches = await axios.get(url, { params: { offset: offset, limit: 10 } })
    return Launches.data;
  }

  const myPageChangedCallback = async (pageNumber) => {
    setOffset((pageNumber * 10) - 10)
    const x = await fetchLaunches(offset);
    setData(x)
    console.log(offset + " " + data);
  }

  const nextLaunches = async () => {
    setIsLoading(true)
    setOffset((prev) => (prev + 10))
    console.log(offset)
    const x = await fetchLaunches(offset);
    setData(x)
    console.log(data);
    setIsLoading(false);
  }

  const lastLaunches = async () => {
    if (offset >= 10 || offset != 0) {
      setIsLoading(true)
      console.log(Launches.data);
      setOffset((prev) => (prev - 10));
      console.log(offset)
      const x = await fetchLaunches(offset);
      setData(x);
      setIsLoading(false);
    }
    console.log("blable")
  }

  // async function nextLaunches() {
  //   setIsLoading(true)
  //   console.log(data + " before");
  //   setOffset((offset) => (offset + 10))
  //   const x = await fetchLaunches(offset);
  //   setData(x);
  //   console.log(data + " after");
  // }

  // async function lastLaunches() {
  //   if (offset >= 10) {
  //     setIsLoading(true)
  //     console.log(Launches.data);
  //     setOffset((prev) => (prev - 10));
  //     const x = await fetchLaunches(offset);
  //     setData(x);
  //   }
  // }

  return (
    <div className="Launches">
      <div className="Launches-header">
        <Navigation />
      </div>
      <div className="Launches-body">
        <h1>Launches</h1>
        <Pagination onChange={myPageChangedCallback} defaultCurrent={1} total={111} size="small" />
        {/* <div className="Launches-button">
          <button onClick={() => (lastLaunches)}> Previous Page </button>
          <button onClick={nextLaunches}> Next Page </button>
        </div> */}
        <ListLoading isLoading={isLoading} launches={data} />
        <div className="Launches-button">
          <button onClick={lastLaunches}> Previous Page </button>
          <button onClick={nextLaunches}> Next Page </button>
        </div>
      </div>
    </div>
  )
}
