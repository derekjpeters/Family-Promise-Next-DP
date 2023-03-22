import React from 'react'
import styles from '../../styles/intake/HouseholdInfo.module.css'
import { Form, Input } from 'antd';

const BottomRight = () => {
  return (
    <div className={styles.bottomRight}>
        <h4>Social Worker Contact Information</h4>
        <Form layout='vertical' size='small'>
            <Form.Item label={<label style={{ color: "white" }}>Name</label>}>
                <Input placeholder='John Doe' style={{ width: '20vw'}} />
            </Form.Item>
            <Form.Item label={<label style={{ color: "white" }}>Email</label>}>
                <Input placeholder='hi@maildrop.cc' style={{ width: '20vw'}} />
            </Form.Item>
            <Form.Item label={<label style={{ color: "white" }}>Phone Number</label>}>
                <Input placeholder='XXX-XXX-XXXX' style={{ width: '20vw'}} />
            </Form.Item>
        </Form>
    </div>
  )
}

export default BottomRight