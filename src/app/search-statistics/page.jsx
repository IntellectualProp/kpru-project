"use client";

import React, { useState, useEffect } from 'react';
import Slider from "@components/componentsHomePage/Slider";
import './searchStatistics.css'; // นำเข้า CSS สำหรับการจัดรูปแบบ
// สร้างไฟล์ CSS ที่จะใช้กับคอมโพเนนต์นี้
function SearchStatistics() {
    // ข้อมูลตัวอย่าง
    const [data, setData] = useState([
        { type: 'ลิขสิทธิ์', count: 152, details: 'ลิขสิทธิ์เพลง' },
        { type: 'ลิขสิทธิ์', count: 98, details: 'ลิขสิทธิ์หนังสือ' },
        { type: 'ลิขสิทธิ์', count: 245, details: 'ลิขสิทธิ์ภาพยนตร์' },
        { type: 'ลิขสิทธิ์', count: 87, details: 'ลิขสิทธิ์ซอฟต์แวร์' },
        { type: 'เครื่องหมายการค้า', count: 321, details: 'เครื่องหมายการค้าผลิตภัณฑ์อาหาร' },
        { type: 'เครื่องหมายการค้า', count: 187, details: 'เครื่องหมายการค้าเสื้อผ้า' },
        { type: 'เครื่องหมายการค้า', count: 134, details: 'เครื่องหมายการค้าเครื่องสำอาง' },
        { type: 'เครื่องหมายการค้า', count: 78, details: 'เครื่องหมายการค้าเครื่องใช้ไฟฟ้า' },
        { type: 'สิทธิบัตร', count: 92, details: 'สิทธิบัตรการประดิษฐ์' },
        { type: 'สิทธิบัตร', count: 56, details: 'สิทธิบัตรการออกแบบผลิตภัณฑ์' },
        { type: 'สิทธิบัตร', count: 113, details: 'สิทธิบัตรกระบวนการผลิต' },
        { type: 'สิทธิบัตร', count: 67, details: 'สิทธิบัตรยา' },
        { type: 'อนุสิทธิบัตร', count: 45, details: 'อนุสิทธิบัตรสิ่งประดิษฐ์' },
        { type: 'อนุสิทธิบัตร', count: 32, details: 'อนุสิทธิบัตรเครื่องมือ' },
    ]);

    // ตัวกรองและการค้นหา
    const [searchType, setSearchType] = useState('');
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // การแบ่งหน้า
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [totalPages, setTotalPages] = useState(1);

    // ประเภทข้อมูลที่มีให้เลือก
    const dataTypes = ['ทั้งหมด', 'สิทธิบัตรการประดิษฐ์', 'สิทธิบัตรการออกแบบผลิตภัณฑ์', 'อนุสิทธิบัตร', 'ผังภูมิของวงจรรวม', 'ลิขสิทธิ์', 'ลิขสิทธิ์เพลง', 'เครื่องหมายการค้า', 'สิ่งบ่งชี้ทางภูมิศาสตร์', 'ข้อมูลความหลากหลายทางชีวภาพ', 'ข้อมูลมรดกภูมิปัญญาทางวัฒนธรรม', 'ข้อมูลสมุยไพรไทย'];

    // ฟังก์ชันสำหรับกรองข้อมูล
    useEffect(() => {
        let results = data;

        // กรองตามประเภท
        if (searchType && searchType !== 'ทั้งหมด') {
            results = results.filter(item => item.type === searchType);
        }

        // กรองตามข้อความค้นหา
        if (searchText) {
            results = results.filter(item =>
                item.details.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        setFilteredData(results);
        setTotalPages(Math.ceil(results.length / itemsPerPage));
        setCurrentPage(1); // รีเซ็ตหน้าปัจจุบันเมื่อมีการค้นหาใหม่
    }, [searchType, searchText, data]);

    // ฟังก์ชันสำหรับการเปลี่ยนหน้า
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // คำนวณข้อมูลที่จะแสดงในหน้าปัจจุบัน
    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredData.slice(startIndex, endIndex);
    };

    // ฟังก์ชันสำหรับการค้นหา
    const handleSearch = (e) => {
        e.preventDefault();
        // การค้นหาจะทำงานอัตโนมัติผ่าน useEffect
    };

    // ฟังก์ชันสำหรับสร้างปุ่มแบ่งหน้า
    const renderPaginationButtons = () => {
        const buttons = [];

        // จำนวนปุ่มที่จะแสดงรอบๆ หน้าปัจจุบัน
        const maxButtonsToShow = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);

        // ปรับ startPage ถ้า endPage ชนขอบ
        if (endPage - startPage + 1 < maxButtonsToShow) {
            startPage = Math.max(1, endPage - maxButtonsToShow + 1);
        }

        // ปุ่มหน้าแรก
        if (startPage > 1) {
            buttons.push(
                <li key="first">
                    <button
                        onClick={() => handlePageChange(1)}
                        className="pagination-button first-page"
                    >
                        1
                    </button>
                </li>
            );

            if (startPage > 2) {
                buttons.push(<li key="ellipsis1" className="pagination-ellipsis">...</li>);
            }
        }

        // ปุ่มตัวเลข
        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <li key={i}>
                    <button
                        onClick={() => handlePageChange(i)}
                        className={`pagination-button ${currentPage === i ? 'active' : ''}`}
                    >
                        {i}
                    </button>
                </li>
            );
        }

        // ปุ่มหน้าสุดท้าย
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                buttons.push(<li key="ellipsis2" className="pagination-ellipsis">...</li>);
            }

            buttons.push(
                <li key="last">
                    <button
                        onClick={() => handlePageChange(totalPages)}
                        className="pagination-button last-page"
                    >
                        {totalPages}
                    </button>
                </li>
            );
        }

        return buttons;
    };

    // ฟังก์ชันสำหรับจัดรูปแบบตัวเลขในตาราง
    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <div>
            <Slider />
            <div className="search-statistics-container">
                <div className="header-section">
                    <h1 className="main-title">บริการค้นหาข้อมูลทรัพย์สินทางปัญญา</h1>
                    <div className="search-stats">
                        <div className="stat-card">
                            <div className="stat-value">{formatNumber(data.length)}</div>
                            <div className="stat-label">รายการทั้งหมด</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-value">{formatNumber(filteredData.length)}</div>
                            <div className="stat-label">ผลการค้นหา</div>
                        </div>
                    </div>
                </div>

                {/* แถบค้นหา */}
                <div className="search-section">
                    <form onSubmit={handleSearch} className="search-form">
                        <div className="search-controls">
                            <div className="search-type-container">
                                <label htmlFor="searchType" className="search-label">ประเภทข้อมูล</label>
                                <select
                                    id="searchType"
                                    className="search-type-select"
                                    value={searchType}
                                    onChange={(e) => setSearchType(e.target.value)}
                                >
                                    {dataTypes.map((type, index) => (
                                        <option key={index} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="search-input-container">
                                <label htmlFor="searchText" className="search-label">ค้นหา</label>
                                <div className="search-input-wrapper">
                                    <input
                                        type="text"
                                        id="searchText"
                                        className="search-input"
                                        placeholder="พิมพ์ข้อความเพื่อค้นหา..."
                                        value={searchText}
                                        onChange={(e) => setSearchText(e.target.value)}
                                    />
                                    <button
                                        type="submit"
                                        className="search-button"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                        <span>ค้นหา</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                {/* ตารางแสดงผล */}
                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>ประเภทรายการ</th>
                                <th>จำนวนรายการ</th>
                                <th>ข้อมูล</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getCurrentPageData().map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? '' : 'alternate-row'}>
                                    <td>
                                        <span className={`badge ${item.type}`}>{item.type}</span>
                                    </td>
                                    <td className="count-cell">{formatNumber(item.count)}</td>
                                    <td className="details-cell">{item.details}</td>
                                </tr>
                            ))}
                            {getCurrentPageData().length === 0 && (
                                <tr>
                                    <td colSpan="3" className="no-data">
                                        <div className="no-data-message">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                                            </svg>
                                            <p>ไม่พบข้อมูลที่ตรงกับเงื่อนไขการค้นหา</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* ตัวแบ่งหน้า */}
                {totalPages > 1 && (
                    <div className="pagination-container">
                        <nav className="pagination-nav">
                            <ul className="pagination-list">
                                <li>
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="pagination-button nav-button prev"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <span>ก่อนหน้า</span>
                                    </button>
                                </li>

                                {renderPaginationButtons()}

                                <li>
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="pagination-button nav-button next"
                                    >
                                        <span>ถัดไป</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}

                {/* แสดงสถานะ */}
                <div className="pagination-status">
                    แสดง {Math.min(filteredData.length, (currentPage - 1) * itemsPerPage + 1)} - {Math.min(currentPage * itemsPerPage, filteredData.length)} จากทั้งหมด {formatNumber(filteredData.length)} รายการ
                </div>
            </div>
        </div>

    );
}

export default SearchStatistics;