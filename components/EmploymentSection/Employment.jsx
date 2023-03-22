import React from 'react'
import styles from '../../styles/intake/Employment.module.css'
import EmploymentLeft from './EmploymentLeft';
import EmploymentRight from './EmploymentRight';

const Employment = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heading}><h1>Employment</h1></div>
        <div className={styles.employmentContainer}>
            <EmploymentLeft />
            <EmploymentRight />
        </div>
    </div>
  )
}

export default Employment