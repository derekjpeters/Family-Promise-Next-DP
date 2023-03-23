import React from 'react'
import styles from '../../styles/dashboard/Dashboard.module.css'
import RecentActivity from './RecentActivity'
import RecentCases from './RecentCases'

const Dashboard = () => {
  return (
    <div className={styles.container}>
        <RecentCases />
        <RecentActivity />
    </div>
  )
}

export default Dashboard