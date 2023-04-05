import React from 'react';
import { Table } from 'antd';
import Link from 'next/link';
import Header from '../components/Dashboard/Header';
import FakerClientAndFamInfoSection from '../components/MockData/FakerClientAndFamInfoSection';
import FakerEmploymentSection from '../components/MockData/FakerEmploymentSection';
import FakerHouseholdInformation from '../components/MockData/FakerHouseholdInformation';
import FakerEducationSection from '../components/MockData/FakerEducationSection';
import FakerFinanceInformation from '../components/MockData/FakerFinanceInformation';
import FakerInsuranceSection from '../components/MockData/FakerInsuranceSection';
import FakerDocuments from '../components/MockData/FakerDocuments';
import FakerGoals from '../components/MockData/FakerGoals';

const CASE_COUNT = 10;

const cases = Array.from({ length: CASE_COUNT }, (_, i) => ({
  id: i + 1,
  clientInfo: FakerClientAndFamInfoSection(),
  employment: FakerEmploymentSection(),
  householdInfo: FakerHouseholdInformation(),
  education: FakerEducationSection(),
  finances: FakerFinanceInformation(),
  insurance: FakerInsuranceSection(),
  documents: FakerDocuments,
  goals: FakerGoals(),
}));

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