import axios from 'axios'
import React from 'react'
const url = "https://api.spacex.land/rest/launches?"

//order : key
//sort : asc // desc
export default async function getLaunches(offset, limit) {
  const fetchLaunches = await axios.get(url, { params: { offset: offset, limit: limit } })
  return (fetchLaunches.data)
}


const fetchLaunches = async () => {
  const Launches = await axios.get(`https://api.spacex.land/rest/launches?&offset=${offset}&limit=10&order="asc"`);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  setData(Launches.data);
  setIsLoading(false);
  return Launches.data;
}