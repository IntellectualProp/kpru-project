import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import {
    FaReact,
    FaBook,
    FaCopyright,
    FaTrademark,
    FaLightbulb,
    FaGavel,
    FaUniversity,
    FaGlobe,
    FaShieldAlt,
    FaHandshake,
    FaFileContract,
    FaBalanceScale
} from 'react-icons/fa'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styles from './MainMenu.module.css'

function MainMenu() {
    // Data for cards with icons
    const cardItems = [
        { id: 1, title: "Card Title 1", icon: FaReact, backgroundColor: "#6f6d6d", description: "รายละเอียดเกี่ยวกับหัวข้อที่ 1" },
        { id: 2, title: "Card Title 2", icon: FaBook, backgroundColor: "#cd2a2a", description: "รายละเอียดเกี่ยวกับหัวข้อที่ 2" },
        { id: 3, title: "Card Title 3", icon: FaCopyright, backgroundColor: "#cbc3c3", description: "รายละเอียดเกี่ยวกับหัวข้อที่ 3" },
        { id: 4, title: "Card Title 4", icon: FaTrademark, backgroundColor: "#6f1f1f", description: "รายละเอียดเกี่ยวกับหัวข้อที่ 4" },
        { id: 5, title: "Card Title 5", icon: FaLightbulb, backgroundColor: "#b8afaf", description: "รายละเอียดเกี่ยวกับหัวข้อที่ 5" },
        { id: 6, title: "Card Title 6", icon: FaGavel, backgroundColor: "#a72424", description: "รายละเอียดเกี่ยวกับหัวข้อที่ 6" },
        { id: 7, title: "Card Title 7", icon: FaUniversity, backgroundColor: "#6f6d6d", description: "รายละเอียดเกี่ยวกับหัวข้อที่ 7" },
        { id: 8, title: "Card Title 8", icon: FaGlobe, backgroundColor: "#cd2a2a", description: "รายละเอียดเกี่ยวกับหัวข้อที่ 8" },
        { id: 9, title: "Card Title 9", icon: FaShieldAlt, backgroundColor: "#cbc3c3", description: "รายละเอียดเกี่ยวกับหัวข้อที่ 9" },
        { id: 10, title: "Card Title 10", icon: FaHandshake, backgroundColor: "#6f1f1f", description: "รายละเอียดเกี่ยวกับหัวข้อที่ 10" },
        { id: 11, title: "Card Title 11", icon: FaFileContract, backgroundColor: "#b8afaf", description: "รายละเอียดเกี่ยวกับหัวข้อที่ 11" },
        { id: 12, title: "Card Title 12", icon: FaBalanceScale, backgroundColor: "#a72424", description: "รายละเอียดเกี่ยวกับหัวข้อที่ 12" }
    ];

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;
    const totalPages = Math.ceil(cardItems.length / cardsPerPage);

    // Get current cards
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cardItems.slice(indexOfFirstCard, indexOfLastCard);

    // Handle page navigation
    const goToNextPage = () => {
        setCurrentPage(prevPage =>
            prevPage < totalPages ? prevPage + 1 : prevPage
        );
    };

    const goToPrevPage = () => {
        setCurrentPage(prevPage =>
            prevPage > 1 ? prevPage - 1 : prevPage
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.horizontalLayout}>
                <div className={styles.imageSection}>
                    <div className={styles.imageContainer}>
                        <Image
                            src="/images/ip_knowledge.jpg"
                            alt="ip_knowledge"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
                <div className={styles.contentSection}>
                    <h1 className={styles.title}>IP Knowledge ความรู้ด้านทรัพย์สินทางปัญญา</h1>

                    <div className={styles.cardsGrid}>
                        {currentCards.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={item.id} className={styles.cardWrapper}>
                                    <Link href={`/card-details/${item.id}`} passHref>
                                        <Card 
                                            className={`${styles.card} ${styles.clickableCard}`} 
                                            style={{ backgroundColor: item.backgroundColor }}
                                        >
                                            <IconComponent color="white" className={styles.cardIcon} />
                                            <Card.Body>
                                                <Card.Title className={styles.cardTitle}>{item.title}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    {/* Pagination Controls */}
                    <div className={styles.paginationControls}>
                        <span className={styles.pageInfo}>
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            className={styles.paginationButton}
                            onClick={goToPrevPage}
                            disabled={currentPage === 1}
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            className={styles.paginationButton}
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainMenu