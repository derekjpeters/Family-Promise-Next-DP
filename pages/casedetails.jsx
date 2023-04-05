// pages/cases/[id].jsx

import React from 'react';
import { useRouter } from 'next/router';
import { Typography, Descriptions } from 'antd';
import Header from '../../components/Dashboard/Header';

// You can import the mock data here to get the case by ID
import cases from '../../data/cases'; // Adjust the path based on your project structure

const { Title } = Typography;

const CaseDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const caseDetail = cases.find((c) => c.id === parseInt(id));

  if (!caseDetail) {
    return (
      <>
        <Header />
        <div>Case not found.</div>
      </>
    );
  }

  return (
    <>
      <Header />
      <Title level={3}>Case {caseDetail.id}</Title>
      <Descriptions column={1}>
        <Descriptions.Item label="Head of Household">{caseDetail.clientInfo.headOfHousehold ? 'Yes' : 'No'}</Descriptions.Item>
        <Descriptions.Item label="Name">{`${caseDetail.clientInfo.firstName} ${caseDetail.clientInfo.lastName}`}</Descriptions.Item>
        <Descriptions.Item label="SSN">{caseDetail.clientInfo.ssn}</Descriptions.Item>
        {/* Add more description items for other sections as needed */}
      </Descriptions>
    </>
  );
};

export default CaseDetails;