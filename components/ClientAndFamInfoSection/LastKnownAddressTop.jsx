import React from 'react'
import { Form, Input } from 'antd';
import styles from '../../styles/intake/ClientAndFamInfo.module.css'

const LastKnownAddressTop = () => {
  return (
    <div className={styles.lastKnownAddressTop}>
        <Form layout='vertical' size='small' style={{display: "flex", justifyContent: "space-around"}}>
            <Form.Item label={<label style={{ color: "white" }}>Street Address</label>} style={{width: "65vw"}}>
                <Input placeholder='123 Main St.' />
            </Form.Item>
            <Form.Item label={<label style={{ color: "white" }}>Apt #</label>} style={{width: "12vw"}}>
                <Input placeholder='999' />
            </Form.Item>
        </Form>
    </div>
  )
}

export default LastKnownAddressTop