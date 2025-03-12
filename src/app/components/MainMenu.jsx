import React from 'react'
import Image from 'next/image'
import Card from 'react-bootstrap/Card'
import { FaReact } from 'react-icons/fa' // นำเข้าไอคอน
import styles from './MainMenu.module.css'

function MainMenu() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/images/ip_knowledge.jpg" alt="ip_knowledge" layout="responsive" width={500} height={300} />
            </div>
            <div className={styles.contentContainer}>
                <h1 className={styles.title}>IP Knowledge ความรู้ด้านทรัพย์สินทางปัญญา</h1>
                <div className={styles.cardContainer}>
                    <Card style={{ width: '18rem', textAlign: 'center', padding: '20px' }}>
                        <FaReact size={50} color="#61dafb" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', textAlign: 'center', padding: '20px' }}>
                        <FaReact size={50} color="#61dafb" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', textAlign: 'center', padding: '20px' }}>
                        <FaReact size={50} color="#61dafb" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', textAlign: 'center', padding: '20px' }}>
                        <FaReact size={50} color="#61dafb" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', textAlign: 'center', padding: '20px' }}>
                        <FaReact size={50} color="#61dafb" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', textAlign: 'center', padding: '20px' }}>
                        <FaReact size={50} color="#61dafb" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default MainMenu
