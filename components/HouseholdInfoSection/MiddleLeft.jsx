import React from 'react'
import styles from '../../styles/intake/HouseholdInfo.module.css'
import { Form, Input, Radio } from 'antd';

const { TextArea } = Input;

const MiddleLeft = () => {
  return (
    <div className={styles.middleLeft}>
        <h4>Previous Living Situation</h4>
        <Input size='small' placeholder='Description' style={{ width: '20vw'}} />
        <h4>Length of Stay In Previous Living Situation</h4>
        <Form layout='vertical' size='small'>
            <Form.Item label={<label style={{ color: "white" }}>Years</label>}>
                <Input placeholder='Years' style={{ width: '20vw'}} />
            </Form.Item>
            <Form.Item label={<label style={{ color: "white" }}>Months</label>}>
                <Input placeholder='Months' style={{ width: '20vw'}} />
            </Form.Item>
        </Form>
        <h4>Does client of family member have disbility?</h4>
        <Radio.Group defaultValue={2}>
            <Radio style={{color: "white"}} value={1}> Yes</Radio>
            <Radio style={{color: "white"}} value={2}> No </Radio>
        </Radio.Group>
        <h4>If Yes, who has disability and what is it?</h4>
        <TextArea rows={4} size='small' placeholder='Description' style={{ width: '20vw'}} />
    </div>
  )
}

export default MiddleLeft