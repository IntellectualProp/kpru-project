import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import {
    FaRegCalendarAlt
} from 'react-icons/fa'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styles from './SearchInfo.module.css'
// import "./SearchInfo.css";

function SearchInfo() {
    // Data for cards with icons
    const cardItems = [
        { id: 1, title: "Card Title 1", createTime: "02 ธันวาคม 67", description: "Some quick example text to build on the card title and make up thebulk of the card's content.", images: "/images/click-http.png" },
        { id: 2, title: "Card Title 2", createTime: "02 ธันวาคม 67", description: "Some quick example text to build on the card title and make up thebulk of the card's content.", images: "/images/click-http.png" },
        { id: 3, title: "Card Title 3", createTime: "02 ธันวาคม 67", description: "Some quick example text to build on the card title and make up thebulk of the card's content.", images: "/images/click-http.png" },
        { id: 4, title: "Card Title 4", createTime: "02 ธันวาคม 67", description: "Some quick example text to build on the card title and make up thebulk of the card's content.", images: "/images/click-http.png" },
        { id: 5, title: "Card Title 5", createTime: "02 ธันวาคม 67", description: "Some quick example text to build on the card title and make up thebulk of the card's content.", images: "/images/click-http.png" },
        { id: 6, title: "Card Title 6", createTime: "02 ธันวาคม 67", description: "Some quick example text to build on the card title and make up thebulk of the card's content.", images: "/images/click-http.png" },
        { id: 7, title: "Card Title 7", createTime: "02 ธันวาคม 67", description: "Some quick example text to build on the card title and make up thebulk of the card's content.", images: "/images/click-http.png" },
        { id: 8, title: "Card Title 8", createTime: "02 ธันวาคม 67", description: "Some quick example text to build on the card title and make up thebulk of the card's content.", images: "/images/click-http.png" },
        { id: 9, title: "Card Title 9", createTime: "02 ธันวาคม 67", description: "Some quick example text to build on the card title and make up thebulk of the card's content.", images: "/images/click-http.png" },
        { id: 10, title: "Card Title 10", createTime: "02 ธันวาคม 67", description: "Some quick example text to build on the card title and make up thebulk of the card's content.", images: "/images/click-http.png" },
        { id: 11, title: "Card Title 11", createTime: "02 ธันวาคม 67", description: "Some quick example text to build on the card title and make up thebulk of the card's content.", images: "/images/click-http.png" },
        { id: 12, title: "Card Title 12", createTime: "02 ธันวาคม 67", description: "Some quick example text to build on the card title and make up thebulk of the card's content.", images: "/images/click-http.png" }
    ];

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6; // Changed from 6 to 4 cards per page
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
            <div className={styles.contentSection}>
                <div className={styles.cardsGrid}>
                    {currentCards.map((item) => {
                        return (
                            <div key={item.id} className={styles.card}>
                                <img src={item.images} alt={item.images}></img>
                                <div className={styles.cardContent}>
                                    <p>{item.title}</p>
                                </div>
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
    )
}

export default SearchInfo