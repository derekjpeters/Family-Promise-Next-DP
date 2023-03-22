import React from 'react'
import styles from '../../styles/intake/HouseholdInfo.module.css'
import {Radio, InputNumber, Checkbox } from 'antd';

const options = [
    'Physical Illness',
    'Mental Illness',
    'Family Conflict',
    'Personal Violence (Being Physically, Emotionally, Verbally, or Sexually Abused)',
    'Substance Abuse/Independence'
];

const MiddleRight = () => {
  return (
    <div className={styles.middleRight}>
        <h4>Number of times client experienced homelessness in past 3 years</h4>
        <InputNumber size='small' placeholder='Number' style={{ width: '10vw'}} />
        <h4>Does client need interpreter?</h4>
        <Radio.Group>
            <Radio style={{color: "white"}} value="yes"> Yes</Radio>
            <Radio style={{color: "white"}} value="yes"> No </Radio>
        </Radio.Group>
        <h4>Does client have access to transportation?</h4>
        <Radio.Group defaultValue={2}>
            <Radio style={{color: "white"}} value={1}> Yes</Radio>
            <Radio style={{color: "white"}} value={2}> No </Radio>
        </Radio.Group>
        <h4>Client or family member has history of:</h4>
        <div className={styles.middleRightCheckbox}>
            {options.map((option, index) => {
                return (
                    <Checkbox key={index} style={{color: 'white', marginInlineStart: '0px'}}>{option}</Checkbox>
                )
            })}
        </div>
    </div>
  )
}

export default MiddleRight