// pages/cases.jsx

import React from 'react';
import { Table } from 'antd';
import Link from 'next/link';
import Header from '../components/Dashboard/Header';
import cases from '../data/cases'

const columns = [
    {
      title: 'Case ID',
      dataIndex: 'id',
      key: 'id',
      render: (id) => (
        <Link href={`/cases/${id}`} passHref>
          <div>{id}</div>
        </Link>
      ),
    },
    {
      title: 'Head of Household',
      dataIndex: 'clientInfo.headOfHousehold',
      key: 'headOfHousehold',
      render: (value) => value ? 'Yes' : 'No',
    },
    {
      title: 'Name',
      dataIndex: 'clientInfo.firstName',
      key: 'name',
      render: (firstName, record) => `${record.clientInfo.firstName} ${record.clientInfo.lastName}`,
    },
    {
      title: 'SSN',
      dataIndex: 'clientInfo.ssn',
      key: 'ssn',
      render: (ssn, record) => `${record.clientInfo.ssn}`,
    },
    
  ]; 

const Cases = () => {
  return (
    <>
      <Header />
      <Table dataSource={cases} columns={columns} />
    </>
  );
};

export default Cases;