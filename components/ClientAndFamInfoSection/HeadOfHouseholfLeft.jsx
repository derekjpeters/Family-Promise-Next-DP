import React from 'react'
import { Form, Input, Select, Radio } from 'antd';
import styles from '../../styles/ClientAndFamInfo.module.css'

const HeadOfHouseholfLeft = () => {
  return (
    <div className={styles.headOfHouseholdLeft}>
        <Form layout='vertical' size='small'>
            <Form.Item label={<label style={{ color: "white" }}>First Name</label>}>
                <Input placeholder='John' />
            </Form.Item>
            <Form.Item label={<label style={{ color: "white" }}>SSN</label>}>
                <Input placeholder='XXX-XX-XXXX' />
            </Form.Item>
            <Form.Item label={<label style={{ color: "white" }}>Ethnicity</label>}>
                <Select placeholder='Select'>
                    <Select.Option value="demo" >Demo</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label={<label style={{ color: "white" }}>Sexual Orientation</label>}>
                <Select placeholder='Select'>
                    <Select.Option value="demo" >Demo</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label={<label style={{ color: "white" }}>If Sexual Orientation Other:</label>}>
                <Input placeholder='Other' />
            </Form.Item>
            <Form.Item label={<label style={{ color: "white" }}>Veteran?</label>}>
                <Radio.Group>
                    <Radio style={{color: "white"}} value="yes"> Yes </Radio>
                    <Radio style={{color: "white"}} value="no"> No </Radio>
                </Radio.Group>
            </Form.Item>
        </Form>
    </ div>
  )
}

export default HeadOfHouseholfLeft