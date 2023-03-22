import React from 'react'
import styles from '../../styles/intake/HouseholdInfo.module.css'
import { Form, InputNumber } from 'antd'

const options = [
    'a. Living in a place not meant for human habitation',
    'b. Emergency shelter',
    'c. Traditional housing',
    'd. Fleeing domestic violence',
    'e. Unsheltered',
    'Total'
];

const TopRight = () => {
  return (
    <div className={styles.topRightContainer}>
        <h4>What long has the client been homeless?</h4>
        <Form size='small' layout='vertical'>
            {options.map((option, index) => {
                return (
                    <Form.Item label={<label style={{ color: "white" }}>{option}</label>} key={index}>
                        <InputNumber style={{ width: '10vw'}} placeholder='Number' />
                    </Form.Item>
                )
            })}
        </Form>
    </div>
  )
}

export default TopRight