import React from 'react'
import ClientAndFamInfo from '../components/ClientAndFamInfoSection/ClientAndFamInfo'
import HouseholdInfo from '../components/HouseholdInfoSection/HouseholdInfo'
import Education from '../components/EducationSection/Education'
import Employment from '../components/EmploymentSection/Employment'
import styles from '../styles/intake/Intake.module.css'

const Intake = () => {
  return (
    <div className={styles.container}>
        <ClientAndFamInfo />
        <HouseholdInfo />
        <Education />
        <Employment />
    </div>
  )
}

export default Intake