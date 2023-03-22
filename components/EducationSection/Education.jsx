import React from 'react'
import styles from '../../styles/intake/Education.module.css'
import { Checkbox } from 'antd'

const options = [
    'Grade School',
    'High School / GED',
    'Some College',
    'Undergraduate Degree',
    'Graduate / Post Graduate Degree',
];

const Education = () => {
  return (
    <div className={styles.container}>
        <div className={styles.heading}><h1>Education</h1></div>
        <h4>Highest Grade / Degree Completed:</h4>
        <div className={styles.educationCheckbox}>
            {options.map((option, index) => {
                return (
                    <Checkbox key={index} style={{color: 'white', marginInlineStart: '0px'}}>{option}</Checkbox>
                )
            })}
        </div>
    </div>
  )
}

export default Education