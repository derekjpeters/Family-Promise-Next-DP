import React from 'react'
import { Form, Input } from 'antd';
import styles from '../../styles/ClientAndFamInfo.module.css'

const LastKnownAddressBottom = () => {
  return (
    <div className={styles.lastKnownAddressBottom}>
      <Form layout='vertical' size='small' style={{display: "flex", justifyContent: "space-around"}}>
        <Form.Item label={<label style={{ color: "white" }}>City</label>} style={{width: "55vw"}}>
            <Input placeholder='City Name' />
        </Form.Item>
        <Form.Item label={<label style={{ color: "white" }}>State</label>} style={{width: "10vw"}}>
            <Input placeholder='State Abbrv.' />
        </Form.Item>
        <Form.Item label={<label style={{ color: "white" }}>Zip</label>} style={{width: "10vw"}}>
            <Input placeholder='Zip Code' />
        </Form.Item>
      </Form>
    </div>
  )
}

export default LastKnownAddressBottom