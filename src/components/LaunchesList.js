import React from 'react';
import moment from 'moment';
import '../styles/components/launcheslist.css';
import { Table } from 'antd'

export default function LaunchesList(props) {
  console.log(props + "props")
  const { launches } = props;
  const { loading } = props;

  console.log(launches + " launchesList")
  console.log(loading + " isLoading")

  if ((!launches || launches.length === 0) && loading === false) {
    return <p>No Launches to display, sorry</p>;
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: '15%',
    },
    {
      title: 'Mission Name',
      dataIndex: 'mission_name',
      width: '35%',
    },
    {
      title: 'Success',
      dataIndex: 'launch_success',
      width: '15%',
      render: (launch_success) => (launch_success) ? 'Yes' : 'No',
    },
    {
      title: 'Date',
      dataIndex: 'launch_date_unix',
      width: '35%',
      sorter:
        (a, b) => a.launch_date_unix - b.launch_date_unix,
      render: (launch_date_unix) => (moment.unix(launch_date_unix).format("MM/DD/YYYY"))
    }
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (<Table columns={columns} key={(prev) => prev + 1} dataSource={launches} onChange={onChange} />)
}
