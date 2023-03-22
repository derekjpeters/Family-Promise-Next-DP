import React from 'react'
import { Form, Input, Select, Radio, DatePicker } from 'antd';
import styles from '../../styles/intake/ClientAndFamInfo.module.css'

const HeadOfHouseholdRight = () => {
  return (
    <div className={styles.headOfHouseholdRight}>
        <Form layout='vertical' size='small'>
            <Form.Item label={<label style={{ color: "white" }}>Last Name</label>}>
                <Input placeholder='Doe'/>
            </Form.Item>
            <Form.Item label={<label style={{ color: "white" }}>DOB</label>}>
                <Input placeholder='MM-DD-YYYY'/>
            </Form.Item>
            <Form.Item label={<label style={{ color: "white" }}>Ethnicity</label>}>
                <Select placeholder='Select'>
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label={<label style={{ color: "white" }}>Gender</label>}>
                <Select placeholder='Select'>
                    <Select.Option value="demo" >Demo</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label={<label style={{ color: "white" }}>If Gender Self Describe:</label>}>
                <Input placeholder='Other' />
            </Form.Item>
            <Form.Item label={<label style={{ color: "white" }}>Pregnant?</label>}>
                <Radio.Group defaultValue={2}>
                    <Radio style={{color: "white"}} value={1}> Yes </Radio>
                    <Radio style={{color: "white"}} value={2}> No </Radio>
                </Radio.Group>
                <DatePicker size='small' placeholder='Select Date' />
            </Form.Item>
        </Form>
    </div>
  )
}

export default HeadOfHouseholdRight