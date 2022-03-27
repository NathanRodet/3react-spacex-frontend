import React from 'react'
import { Card } from 'antd';
import moment from 'moment';
import NotfoundImage from '../media/NotfoundImage.png';


export default function NextLaunchCard(props) {
  const { nextLaunch } = props;
  const { loading } = props;

  if ((!nextLaunch || nextLaunch.length === 0) && (loading === true)) {
    return (
      <h3>Wait ! fetching data may take some time ! :)</h3>
    )
  } else if ((!nextLaunch || nextLaunch.length === 0)) {
    <h3>No next Launches to display, sorry</h3>
  }

  return (
    <Card
      hoverable
      title={nextLaunch.mission_name}
      style={{ width: 240 }}
      cover={<img width="240" height="240" alt="mission patch small" src={(nextLaunch.links.mission_patch_small != null) ? nextLaunch.links.mission_patch_small : NotfoundImage} />}
    >
      <span>
        SITE NAME : {(nextLaunch.launch_site.site_name != "") ? nextLaunch.launch_site.site_name : "No site name provided"}
      </span>
      <br />
      <span>
        ROCKET NAME : {(nextLaunch.rocket.rocket_name != "") ? nextLaunch.rocket.rocket_name : "No rocket name provided"}
      </span>
      <br />
      <span>
        DATE : {moment.unix(nextLaunch.launch_date_unix).format("MM/DD/YYYY")}
      </span>
    </Card>
  )
}
