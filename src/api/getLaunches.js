import axios from 'axios'
const url = "https://api.spacex.land/rest/launches?"

//order : key
//sort : asc // desc
export default async function getLaunches() {
  const fetchLaunches = await axios.get(url, { params: { sort: "launch_date_utc" } })
  return (fetchLaunches.data)
}

