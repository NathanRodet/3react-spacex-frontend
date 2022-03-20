import React from 'react';
import '../styles/components/launcheslist.css';

export default function LaunchesList(launchesProps) {
  const { launches } = launchesProps;
  let launchesUsedData = launches;

  if (!launches || launches.length === 0) return <p>No Launches to display, sorry</p>;

  let minLaunches = 0;
  let maxLaunches = 10;

  function nextLaunches() {
    minLaunches += 10;
    maxLaunches += 10;
    launchesUsedData = launches;
    console.log(minLaunches);
    console.log(maxLaunches);
  }
  function lastLaunches() {
    if (minLaunches > 10) {
      minLaunches -= 10;
      maxLaunches -= 10;
      launchesUsedData = launches;
    }
    console.log(minLaunches);
    console.log(maxLaunches);
  }

  return (
    <div className="LaunchesList-component">
      <h2 className='LaunchesList-head'>Available Launches</h2>
      {launchesUsedData.slice(minLaunches, maxLaunches).map((launch) => {
        console.log(minLaunches, maxLaunches)
        return (
          <div key={launch.id} className="LaunchesList-card" >
            <ul className="LaunchesList-list">
              <li className="LaunchesList-item">
                <span id='LaunchesList-mission-name'> Mission Name : {launch.mission_name} </span>
                <span id='LaunchesList-launch-success'> Is sucessful : {launch.launch_success ? "Yes" : "No"} </span>
                <span id='LaunchesList-launch-year'> Launch Year : {launch.launch_year} </span>
                <span id='LaunchesList-mission_id'> ID : {(launch.mission_id != "") ? launch.mission_id : "No ID detected"} </span>
              </li>
            </ul>
          </div>
        );
      })}
      <div className="Launches-button">
        <button onClick={lastLaunches} > Last 10 </button>
        <button onClick={nextLaunches} > Next 10 </button>
      </div>
    </div >
  )

}
