import axios from 'axios'
const url = "http://api.spacex.land/rest/launches-past"


export default async function getPastLaunches() {
  const fetchPastLaunches = await axios.get(url, { params: { offset: 0, limit: 3 } })
  return (fetchPastLaunches.data)
}
