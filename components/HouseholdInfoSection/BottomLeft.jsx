import React from 'react'
import styles from '../../styles/intake/HouseholdInfo.module.css'
import { Input, Radio, Checkbox } from 'antd';

const { TextArea } = Input;

const options = [
    'Active Case',
    'Past Incident',
    'More than one past incident',
];
const BottomLeft = () => {
  return (
    <div className={styles.bottomLeft}>
        <h4>CPS Involvement</h4>
        <div className={styles.bottomLeftCheckbox}>
            {options.map((option, index) => {
                return (
                    <Checkbox key={index} style={{color: 'white', marginInlineStart: '0px'}}>{option}</Checkbox>
                )
            })}
        </div>
        <TextArea rows={4} size='small' placeholder='Description' style={{ width: '20vw'}} />
        <h4>Received a Section 8 housing voucher in past 3 years?</h4>
        <Radio.Group defaultValue={2}>
            <Radio style={{color: "white"}} value={1}> Yes</Radio>
            <Radio style={{color: "white"}} value={2}> No </Radio>
        </Radio.Group>
    </div>
  )
}

export default BottomLeft