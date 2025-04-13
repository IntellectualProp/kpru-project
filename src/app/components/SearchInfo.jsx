import React, { useState, useEffect } from 'react';
import { FaRegCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './SearchInfo.css';

function SearchInfo({ 
  cardItems = [], 
  title = "สืบค้นข้อมูล",
  cardsPerPageDefault = 6,
  readMoreText = "อ่านเพิ่มเติม",
  onCardClick = null
}) {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(cardsPerPageDefault);
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

  // Handle card click
  const handleCardClick = (card) => {
    if (onCardClick) {
      onCardClick(card);
    }
  };

  // Adjust cards per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(4);
      } else {
        setCardsPerPage(cardsPerPageDefault);
      }
    };

    // Initial call
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, [cardsPerPageDefault]);

  // Reset to page 1 when cardItems change
  useEffect(() => {
    setCurrentPage(1);
  }, [cardItems]);

  return (
    <div className="container">
      {title && <h2 className="section-title">{title}</h2>}
      <div className="content-section">
        {/* Card Grid - Responsive Layout */}
        <div className="cards-grid">
          {currentCards.length > 0 ? (
            currentCards.map((item) => (
              <div 
                key={item.id} 
                className="card" 
                onClick={() => handleCardClick(item)}
              >
                <div className="card-image-container">
                  <img 
                    src={item.images} 
                    alt={item.title}
                    className="card-image"
                  />
                  <div className="image-overlay"></div>
                </div>
                
                <div className="card-content">
                  <h3 className="card-title">{item.title}</h3>
                  
                  <div className="card-date">
                    <FaRegCalendarAlt className="date-icon" />
                    <span>{item.createTime}</span>
                  </div>
                  
                  <p className="card-description">
                    {item.description}
                  </p>
                  
                  <button className="read-more-btn">
                    {readMoreText}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-data-message">ไม่พบข้อมูล</div>
          )}
        </div>

        {/* Pagination Controls */}
        {cardItems.length > 0 && (
          <div className="pagination-controls">
            <span className="page-info">
              หน้า {currentPage} จาก {totalPages}
            </span>
            
            <div className="pagination-buttons">
              <button
                className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={goToPrevPage}
                disabled={currentPage === 1}
              >
                <FaChevronLeft />
              </button>
              
              <button
                className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className='end-line'></div>
    </div>
  );
}

export default SearchInfo;