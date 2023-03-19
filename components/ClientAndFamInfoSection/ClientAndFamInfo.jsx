import React from 'react'
import styles from '../../styles/ClientAndFamInfo.module.css'
import HeadOfHouseholfLeft from './HeadOfHouseholfLeft';
import HeadOfHouseholdRight from './HeadOfHouseholdRight';
import LastKnownAddressTop from './LastKnownAddressTop';
import LastKnownAddressBottom from './LastKnownAddressBottom';
import { Button } from 'antd';


const ClientAndFamInfo = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heading}><h1>Client and Family Information</h1></div>
        <div className={styles.subheading}><h3>Head of Household</h3></div>
        <div className={styles.headOfHouseholdContainer}>
            <HeadOfHouseholfLeft />
            <HeadOfHouseholdRight />
        </div>
        <div className={styles.subheading}><h3>Last Known Address</h3></div>
        <div className={styles.lastKnownAddressContainer}>
            <LastKnownAddressTop />
            <LastKnownAddressBottom />
        </div>
    </div>
  )
}

export default ClientAndFamInfo;