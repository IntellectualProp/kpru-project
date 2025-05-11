"use client";

import React, { useState, useEffect } from 'react';
import Slider from "@components/componentsHomePage/Slider";
import './SearchList.css';

function SearchList({
    title = "",
    dataTypes = [],
    data = [],
    columns = [
        { key: 'type', label: 'ประเภทรายการ' },
        { key: 'count', label: 'จำนวนรายการ' },
        { key: 'details', label: 'ข้อมูล' }
    ],
    hideSearch = false,
}) {
    const [searchType, setSearchType] = useState('');
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        let results = data;

        if (searchType && searchType !== 'ทั้งหมด') {
            results = results.filter(item => item.type === searchType);
        }

        if (searchText) {
            results = results.filter(item =>
                typeof item.title === 'string' &&
                item.title.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        setFilteredData(results);
        setTotalPages(Math.ceil(results.length / itemsPerPage));
        setCurrentPage(1);
    }, [searchType, searchText, data]);


    const handlePageChange = (page) => setCurrentPage(page);

    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredData.slice(startIndex, startIndex + itemsPerPage);
    };

    const handleSearch = (e) => e.preventDefault();

    const renderPaginationButtons = () => {
        const buttons = [];
        const maxButtonsToShow = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxButtonsToShow - 1);
        if (endPage - startPage + 1 < maxButtonsToShow) {
            startPage = Math.max(1, endPage - maxButtonsToShow + 1);
        }

        if (startPage > 1) {
            buttons.push(<li key="first"><button onClick={() => handlePageChange(1)} className="pagination-button first-page">1</button></li>);
            if (startPage > 2) buttons.push(<li key="ellipsis1" className="pagination-ellipsis">...</li>);
        }

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <li key={i}>
                    <button onClick={() => handlePageChange(i)} className={`pagination-button ${currentPage === i ? 'active' : ''}`}>
                        {i}
                    </button>
                </li>
            );
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) buttons.push(<li key="ellipsis2" className="pagination-ellipsis">...</li>);
            buttons.push(<li key="last"><button onClick={() => handlePageChange(totalPages)} className="pagination-button last-page">{totalPages}</button></li>);
        }

        return buttons;
    };

    const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
        <div>
            <Slider />
            <div className="search-statistics-container">
                <div className="header-section">
                    <h1 className="main-title">{title}</h1>
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
                            {!hideSearch && (
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
                            )}

                            <div className={`search-input-container ${hideSearch ? 'full-width' : ''}`}>
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
                                    <button type="submit" className="search-button">
                                        🔍 <span>ค้นหา</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>



                {/* ตาราง */}
                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                {columns.map((col) => (
                                    <th key={col.key}>{col.label}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {getCurrentPageData().map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? '' : 'alternate-row'}>
                                    {columns.map((col) => (
                                        <td key={col.key} className={`${col.key}-cell`}>
                                            {col.key === 'count'
                                                ? `${formatNumber(item[col.key])} รายการ`
                                                : col.key === 'type'
                                                    ? <span className={`badge ${item[col.key]}`}>{item[col.key]}</span>
                                                    : typeof item[col.key] === 'boolean'
                                                        ? item[col.key] ? '✅' : '❌'
                                                        : item[col.key]
                                            }
                                        </td>
                                    ))}
                                </tr>

                            ))}
                            {getCurrentPageData().length === 0 && (
                                <tr><td colSpan={columns.length} className="no-data">ไม่พบข้อมูลที่ตรงกับเงื่อนไข</td></tr>
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
                                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="pagination-button nav-button prev">
                                        ก่อนหน้า
                                    </button>
                                </li>
                                {renderPaginationButtons()}
                                <li>
                                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="pagination-button nav-button next">
                                        ถัดไป
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}

                <div className="pagination-status">
                    แสดง {Math.min(filteredData.length, (currentPage - 1) * itemsPerPage + 1)} - {Math.min(currentPage * itemsPerPage, filteredData.length)} จากทั้งหมด {formatNumber(filteredData.length)} รายการ
                </div>
            </div>
        </div>
    );
}

export default SearchList;
