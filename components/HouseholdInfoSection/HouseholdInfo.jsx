import React from 'react'
import styles from '../../styles/intake/HouseholdInfo.module.css'
import TopLeft from './TopLeft';
import TopRight from './TopRight';
import MiddleLeft from './MiddleLeft';
import MiddleRight from './MiddleRight';
import BottomRight from './BottomRight';
import BottomLeft from './BottomLeft';

const HouseholdInfo = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heading}><h1>Household Information</h1></div>
        <div className={styles.topContainer}>
            <TopLeft />
            <TopRight />
        </div>
        <div className={styles.middleContainer}>
            <MiddleLeft />
            <MiddleRight />
        </div>
        <div className={styles.bottomContainer}>
            <BottomLeft />
            <BottomRight />
        </div>
    </div>
  )
}

export default HouseholdInfo