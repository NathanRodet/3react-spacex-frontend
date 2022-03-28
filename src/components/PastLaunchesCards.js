import React from 'react'
import { List, Card } from 'antd';
import { Link } from 'react-router-dom';
import NotfoundImage from '../media/NotfoundImage.png';

const { Meta } = Card;

export default function PastLaunchesCards(props) {
  const { pastLaunches } = props;
  const { loading } = props;

  if ((!pastLaunches || pastLaunches.length === 0) && (loading === true)) {
    return (
      <h3>Wait ! fetching data may take some time ! :)</h3>
    )
  } else if ((!pastLaunches || pastLaunches.length === 0)) {
    <h3>No next Launches to display, sorry</h3>
  }

  return (
    <List
      grid={{
        gutter: 3,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 3,
        xxl: 3,
      }}
      dataSource={pastLaunches}
      renderItem={item => (
        <Link className="Navigation-link" to={`/launch/${item.id}`}>
          <List.Item>
            <Card
              hoverable
              title={item.mission_name}
              style={{ width: 240 }}
              cover={<img width="240" height="240" alt="mission patch" src={(item.links.mission_patch_small != null) ? item.links.mission_patch_small : NotfoundImage} />}
            >
              <span>
                SITE NAME : {(item.launch_site.site_name != "") ? item.launch_site.site_name : "No site name provided"}
              </span>

              <Meta title="Video Link" description={(item.links.video_link != "") ? item.links.video_link : "No link provided"} />
            </Card>
          </List.Item>
        </Link>
      )
      }
    />
  )
}

//https://ant.design/components/list/