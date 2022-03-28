import React from 'react';
import moment from 'moment';
import '../styles/components/launchdetails.css';
import { Descriptions, Badge } from 'antd';

export default function LaunchDetails(props) {
  const { launch } = props;
  const { loading } = props;

  console.log(launch);
  console.log(loading);

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
      <Descriptions layout="vertical" bordered>
        <Descriptions.Item label="Launch Site">
          {(launch.launch_site.site_name_long) ? (launch.launch_site.site_name_long) : "No full site name provided"} - {(launch.launch_site.site_name) ? (launch.launch_site.site_name) : "No short site name provided"}
        </Descriptions.Item>
        <Descriptions.Item label="Billing Mode">

        </Descriptions.Item>
        <Descriptions.Item label="Date">
          {moment.unix(launch.launch_date_unix).format("MM/DD/YYYY")}
        </Descriptions.Item>
        <Descriptions.Item label="Order time">
          2018-04-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label="Usage Time" span={2}>
          2019-04-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label="Status" span={3}>
          <Badge status="processing" text="Running" />
        </Descriptions.Item>
        <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
        <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
        <Descriptions.Item label="Mission Details">
          {(launch.details) ? (launch.details) : "No details provided"}
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}
