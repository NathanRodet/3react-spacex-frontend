import axios from 'axios'
const url = "https://api.spacex.land/rest/launch-next"


export default async function getNextLaunch() {
  const fetchNextLaunch = await axios.get(url)
  return (fetchNextLaunch.data)
}
