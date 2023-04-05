import React from 'react'
import styles from '../../styles/Dashboard/Header.module.css'
import { UserOutlined, UsergroupAddOutlined, CalendarOutlined, FolderOpenOutlined, FileAddOutlined, DatabaseOutlined, UserAddOutlined } from '@ant-design/icons'
import { Input, Button, Avatar } from 'antd'
import Image from 'next/image'
import fpLogo from '../../assets/fplogo.png'
import Link from 'next/link';

const { Search } = Input;

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.topContainer}>
            <Image
                src={fpLogo}
                alt="Family Promise of Spokane"
                width={200}
                height={50}
            / >
            <Search
                placeholder="Search for a client"
                style={{ width: '40vw' }}
                allowClear
                enterButton={<Button style={{ backgroundColor: "#CDCDCD", color: "black" }}>Search</Button>}
                size="large"
            />
            <Avatar size="large" icon={<UserOutlined />} style={{ backgroundColor: '#CDCDCD' }} />
        </div>
        <div className={styles.bottomContainer}>
            <Link href="/">
              <div className={styles.menuItem}>
                  <UsergroupAddOutlined style={{ fontSize: '1.5rem' }}/>
                  <p>DASHBOARD</p>
              </div>
            </Link>
            <Link href="/calendar">
              <div className={styles.menuItem}>
                  <CalendarOutlined style={{ fontSize: '1.5rem' }} />
                  <p>CALENDAR</p>
              </div>
            </Link>
            <Link href="/cases">
              <div className={styles.menuItem}>
                  <FolderOpenOutlined style={{ fontSize: '1.5rem' }} />
                  <p>CASES</p>
              </div>
            </Link>
            <Link href="/resources">
              <div className={styles.menuItem}>
                  <FileAddOutlined style={{ fontSize: '1.5rem' }} />
                  <p>RESOURCES</p>
              </div>
            </Link>
            <Link href="/services">
              <div className={styles.menuItem}>
                  <DatabaseOutlined style={{ fontSize: '1.5rem' }} />
                  <p>SERVICES</p>
              </div>
            </Link>
            <Link href="/intake">
              <div className={styles.menuItem}>
                  <UserAddOutlined style={{ fontSize: '1.5rem' }} />
                  <p>INTAKE</p>
              </div>
            </Link>
        </div>
    </div>
  )
}

export default Header