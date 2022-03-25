import React from 'react';
import moment from 'moment';
import { Table, Button, Input, } from 'antd';
import { SearchOutlined } from "@ant-design/icons";
import uuid from 'react-uuid';

export default function LaunchesList(props) {
  const { launches } = props;
  const { loading } = props;

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
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              onClick={() => {
                confirm();
              }}
              type="primary"
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.mission_name.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: 'Mission ID',
      dataIndex: 'mission_id',
      width: '20%',
      render: (mission_id) => (mission_id != "") ? mission_id : 'No ID detected',
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
      width: '15%',
      sorter:
        (a, b) => a.launch_date_unix - b.launch_date_unix,
      render: (launch_date_unix) => (moment.unix(launch_date_unix).format("MM/DD/YYYY"))
    }
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (<Table columns={columns} rowKey={() => uuid()} dataSource={launches} onChange={onChange} />)
}
