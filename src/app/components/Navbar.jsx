"use client";

import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import styles from './Navbar.module.css'
function MyNavbar() {
    return (
        <Navbar expand="lg" className={styles.navbar}>
            <Container className={styles.container}>
                <Navbar.Brand href="/" className='underlines'>หน้าหลัก</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={styles.nav}>
                        <Nav.Link href="/about-page">เกี่ยวกับ</Nav.Link>
                        <Nav.Link href="/download-page">ดาวน์โหลด</Nav.Link>
                        <Nav.Link href="/patent-search-page">Patent Search</Nav.Link>
                        <Nav.Link href="#link">ค้นหา/สถิติ</Nav.Link>
                        <Nav.Link href="#link">ข่าวสาร/กิจกรรม</Nav.Link>
                        <Nav.Link href="#link">ตรวจสอบสถานะคำขอ</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Patent Search</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar