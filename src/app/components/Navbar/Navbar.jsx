// MyNavbar.jsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

function MyNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const lastScrollY = useRef(0);
    const scrollTimer = useRef(null);

    // ตรวจจับการเลื่อนหน้าจอเพื่อเปลี่ยนสีพื้นหลังและซ่อน/แสดง navbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // ตรวจสอบว่ากำลังเลื่อนลงหรือขึ้น
            if (currentScrollY > lastScrollY.current + 10) {
                // เลื่อนลง - ซ่อน navbar
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY.current - 10) {
                // เลื่อนขึ้น - แสดง navbar
                setIsVisible(true);
            }
            
            // บันทึกตำแหน่งล่าสุด
            lastScrollY.current = currentScrollY;
            
            // ตั้งค่า scrolled สำหรับสีพื้นหลัง
            if (currentScrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            
            // ตั้งเวลาเพื่อตรวจสอบเมื่อหยุดการเลื่อน
            if (scrollTimer.current !== null) {
                clearTimeout(scrollTimer.current);
            }
            
            scrollTimer.current = setTimeout(() => {
                setIsVisible(true); // แสดง navbar เมื่อหยุดการเลื่อน
            }, 800); // รอ 800ms หลังจากหยุดการเลื่อน
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimer.current !== null) {
                clearTimeout(scrollTimer.current);
            }
        };
    }, []);

    // สร้างฟังก์ชันสำหรับจัดการการคลิกที่เมนูใน mobile view
    const handleNavItemClick = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    // สร้างฟังก์ชันสำหรับเปิด/ปิด dropdown
    const toggleDropdown = (e) => {
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${isVisible ? styles.visible : styles.hidden}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.brand}>
                    หน้าหลัก
                </Link>
                <button 
                    className={`${styles.menuToggle} ${menuOpen ? styles.open : ''}`} 
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <div className={`${styles.navMenu} ${menuOpen ? styles.active : ''}`}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link href="/about-page" className={styles.navLink} onClick={handleNavItemClick}>
                                เกี่ยวกับ
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/download-page" className={styles.navLink} onClick={handleNavItemClick}>
                                ดาวน์โหลด
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/patent-search-page" className={styles.navLink} onClick={handleNavItemClick}>
                                Patent Search
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="#" className={styles.navLink} onClick={handleNavItemClick}>
                            ค้นหา/สถิติ
                            </Link>
                        </li>
                        {/* <li className={`${styles.navItem} ${styles.dropdown}`}>
                            <a 
                                href="#" 
                                className={styles.navLink} 
                                onClick={toggleDropdown}
                            >
                                ค้นหา/สถิติ <span className={styles.dropdownIcon}>&#9662;</span>
                            </a>
                            <ul className={`${styles.dropdownMenu} ${dropdownOpen ? styles.show : ''}`}>
                                <li>
                                    <Link href="/search" className={styles.dropdownItem} onClick={handleNavItemClick}>
                                        ค้นหาข้อมูล
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/statistics" className={styles.dropdownItem} onClick={handleNavItemClick}>
                                        สถิติ
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/advanced-search" className={styles.dropdownItem} onClick={handleNavItemClick}>
                                        ค้นหาขั้นสูง
                                    </Link>
                                </li>
                            </ul>
                        </li> */}
                        <li className={styles.navItem}>
                            <Link href="/news-events-page" className={styles.navLink} onClick={handleNavItemClick}>
                                ข่าวสาร/กิจกรรม
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/status-check" className={styles.navLink} onClick={handleNavItemClick}>
                                ตรวจสอบสถานะคำขอ
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MyNavbar;