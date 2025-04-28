"use client"; // บอกว่าไฟล์นี้เป็น Client Component

import React from 'react';
import Link from 'next/link';
import {
    FaReact,
    FaArrowLeft
} from 'react-icons/fa';
import styles from './CardDetails.module.css';

function CardDetails() {
    // ข้อมูลการ์ดที่ต้องการแสดงโดยตรง (แบบ static)
    const card = {
        title: "Card Title 1",
        icon: FaReact,
        backgroundColor: "#6f6d6d",
        description: "รายละเอียดเกี่ยวกับหัวข้อที่ 1"
    };
    
    // Component สำหรับไอคอน
    const IconComponent = card.icon;
    
    // รายการเนื้อหาที่เกี่ยวข้อง
    const relatedContent = [
        { id: 1, title: "เนื้อหาที่เกี่ยวข้อง 1" },
        { id: 2, title: "เนื้อหาที่เกี่ยวข้อง 2" },
        { id: 3, title: "เนื้อหาที่เกี่ยวข้อง 3" }
    ];
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link href="/" passHref>
                    <button className={styles.backButton}>
                        <FaArrowLeft /> กลับไปหน้าหลัก
                    </button>
                </Link>
            </div>
            
            <div className={styles.cardDetailContainer} style={{ backgroundColor: card.backgroundColor }}>
                <div className={styles.iconContainer}>
                    <IconComponent color="white" className={styles.detailIcon} />
                </div>
                
                <div className={styles.contentContainer}>
                    <h1 className={styles.detailTitle}>{card.title}</h1>
                    <div className={styles.divider}></div>
                    <div className={styles.description}>
                        {card.description}
                        
                        {/* เนื้อหาเพิ่มเติมสำหรับหน้ารายละเอียด */}
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, 
                            nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies
                            nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl
                            nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
                        </p>
                        
                        <div className={styles.additionalInfo}>
                            <h3>ข้อมูลเพิ่มเติม</h3>
                            <ul>
                                <li>ข้อมูลที่ 1</li>
                                <li>ข้อมูลที่ 2</li>
                                <li>ข้อมูลที่ 3</li>
                            </ul>
                        </div>
                        
                        <div className={styles.relatedContent}>
                            <h3>เนื้อหาที่เกี่ยวข้อง</h3>
                            <div className={styles.relatedLinks}>
                                {relatedContent.map(item => (
                                    <div className={styles.relatedLink} key={item.id}>
                                        {item.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetails;