import React from 'react'
import '../styles/components/launcheslist.css';

export default function LaunchesList(props) {
  const { launches } = props;
  if (!launches || launches.length === 0) return <p>No Launches to display, sorry</p>;

  let minArticle = 0;
  let maxArticle = 10;

  return (
    <div className="LaunchesList-component">
      <h2 className='LaunchesList-head'>Available Launches</h2>
      {launches.slice(minArticle, maxArticle).map((launch) => {
        return (
          <card className="LaunchesList-card" >
            <ul className="LaunchesList-list">
              <li className="LaunchesList-item">
                <span id='LaunchesList-mission-name'> Mission Name : {launch.mission_name} </span>
                <span id='LaunchesList-launch-success'> Is sucessful : {launch.launch_success ? "Yes" : "No"} </span>
                <span id='LaunchesList-launch-year'> Launch Year : {launch.launch_year} </span>
                <span id='LaunchesList-launch_year'> ID : {(launch.mission_id != "") ? launch.mission_id : "No ID detected"} </span>
              </li>
            </ul>
          </card>
        );
      })}
    </div >
  )
}
