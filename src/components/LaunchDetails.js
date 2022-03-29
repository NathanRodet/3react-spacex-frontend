import React from 'react';
import moment from 'moment';
import '../styles/components/launchdetails.css';
import { Descriptions, Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
}

export default function LaunchDetails(props) {
  const { launch } = props;
  const { loading } = props;

  if ((!launch || launch.length === 0) && (loading === true)) {
    return (
      <h3 id="Launch-head">Wait ! fetching data may take some time ! :)</h3>
    )
  } else if ((!launch || launch.length === 0)) {
    <h3 id="Launch-head">There is no launch details to display, sorry</h3>
  }

  //When clicking on one displayed launch it should redirect you to a new page which display all the information relative to the launch and the first_stage used.

  //If the first_stage was used for other mission you should allow the user to click on it and display the list of all mission done by this first_stage
  //(display all missions ID and name, first flight date, and some 2 others).

  return (
    <div>
      <h1 id="Launch-head">Launch {launch.id} - {(launch.mission_name) ? launch.mission_name : "No mission name detected"}</h1>
      <Descriptions layout="vertical" bordered>
        <Descriptions.Item label={<b>Launch Site</b>}>
          {(launch.launch_site.site_name_long) ? (launch.launch_site.site_name_long) : "No full site name provided"} - {(launch.launch_site.site_name) ? (launch.launch_site.site_name) : "No short site name provided"}
        </Descriptions.Item>
        <Descriptions.Item label={<b>Date</b>}>
          {moment.unix(launch.launch_date_unix).format("DD/MM/YYYY")}
        </Descriptions.Item>
        <Descriptions.Item label={<b>Launch time</b>}>
          {moment.unix(launch.static_fire_date_unix).format("h:mm:ss a")}
        </Descriptions.Item>
        <Descriptions.Item label={<b>Rocket Name</b>}>
          {(launch.rocket.rocket_name) ? (launch.rocket.rocket_name) : "No rocket name provided"}
        </Descriptions.Item>
        <Descriptions.Item label={<b>Rocket Type</b>}>
          {(launch.rocket.rocket_type) ? (launch.rocket.rocket_type) : "No rocket type provided"}
        </Descriptions.Item>
        <Descriptions.Item label={<b>Video Link</b>}>
          {(launch.links.video_link) ? (<a href={launch.links.video_link}>{launch.links.video_link}</a>) : "No video link provided"}
        </Descriptions.Item>
        <Descriptions.Item label={<b>Mission Details</b>}>
          {(launch.details) ? (launch.details) : "No details provided"}
        </Descriptions.Item>
      </Descriptions>
      <h1 id="Launch-head">Rocket Stage</h1>
      <Descriptions layout="vertical" bordered>
        <Descriptions.Item label={<b>Core ID</b>}>
          {(launch.rocket.first_stage.cores[0].core.id) ? (launch.rocket.first_stage.cores[0].core.id) : "No rocket core ID provided"}
        </Descriptions.Item>
        <Descriptions.Item label={<b>Status</b>}>
          {(launch.rocket.first_stage.cores[0].core.status) ? (launch.rocket.first_stage.cores[0].core.status) : "No status provided"}
        </Descriptions.Item>
        <Descriptions.Item label={<b>Water Landing</b>}>
          {(launch.rocket.first_stage.cores[0].core.water_landing) ? "Yes" : "No"}
        </Descriptions.Item>
        <Descriptions.Item label={<b>Missions</b>}>
          <Collapse defaultActiveKey={['1']} onChange={callback}>
            {
              launch.rocket.first_stage.cores[0].core.missions.map((element) => {
                return (
                  <Panel header={(element.name) ? (element.name) : "No mission name provided"} key={element.name}>
                    {(element.flight) ? ("Nombre de vol : " + element.flight) : "No flights provided"}
                  </Panel>
                )
              })
            }
          </Collapse>
        </Descriptions.Item>
      </Descriptions>
    </div >
  )
}