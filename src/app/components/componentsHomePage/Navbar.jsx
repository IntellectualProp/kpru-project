"use client";

import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import styles from './Navbar.module.css'
function MyNavbar() {
    return (
        <Navbar expand="lg" className={styles.navbar}>
            <Container className={styles.container}>
                <Navbar.Brand href="/" className={styles.brand}>หน้าหลัก</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggle} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={styles.nav}>
                        <Nav.Link href="/about-page">เกี่ยวกับ</Nav.Link>
                        <Nav.Link href="/download-page">ดาวน์โหลด</Nav.Link>
                        <Nav.Link href="/patent-search-page">Patent Search</Nav.Link>
                        <Nav.Link href="#link">ค้นหา/สถิติ</Nav.Link>
                        <Nav.Link href="/news-events-page">ข่าวสาร/กิจกรรม</Nav.Link>
                        <Nav.Link href="#link">ตรวจสอบสถานะคำขอ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar