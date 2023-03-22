import React from 'react'
import styles from '../../styles/intake/HouseholdInfo.module.css'
import { Checkbox, Input } from 'antd';

const options = [ 
    'Fleeing Domestic Violence',
    'Lack of Income',
    'Family Conflict',
    'Family Rejection/LGBTQ+ Issues',
    'Lack of Affordable Housing',
    'Eviction',
    'Lost Job',
    'Other'
];

const TopLeft = () => {
  return (
    <div className={styles.topLeftContainer}>
        <h4>What circumstances brought client to Open Doors?</h4>
        <div>
            {options.map((option, index) => {
                return (
                    <Checkbox key={index} style={{color: 'white', marginInlineStart: '0px'}}>{option}</Checkbox>
                )
            })}
            <Input size='small' placeholder='If Other Enter Here' style={{ width: '20vw'}} />
        </div>
    </div>
  )
}

export default TopLeft