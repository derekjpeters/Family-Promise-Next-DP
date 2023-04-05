import React from 'react'
import ClientAndFamInfo from '../components/ClientAndFamInfoSection/ClientAndFamInfo'
import Header from '../components/Dashboard/Header';
import HouseholdInfo from '../components/HouseholdInfoSection/HouseholdInfo'
import Education from '../components/EducationSection/Education'
import Employment from '../components/EmploymentSection/Employment'
import styles from '../styles/intake/Intake.module.css'

const Intake = () => {
  return (
    <div className={styles.container}>
       <Header />
      <h1></h1>
        <ClientAndFamInfo />
        <HouseholdInfo />
        <Education />
        <Employment />
    </div>
  )
}

export default Intake