import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styles from './Slider.module.css';
function Slider() {
    const slides = [
        {
            id: 1,
            image: '/images/example_slider.jpg',
            caption: 'First Slide',
            description: 'This is the description for the first slide'
        },
        {
            id: 2,
            image: '/images/ip_knowledge.jpg',
            caption: 'Second Slide',
            description: 'This is the description for the second slide'
        }
    ];

    return (
        <div className={styles.sliderContainer}>
            <Carousel fade interval={5000} className={styles.customCarousel}>
                {slides.map((slide) => (
                    <Carousel.Item key={slide.id} className={styles.customItem}>
                        <div className={styles.slideImageContainer}>
                            <img
                                className={styles.slideImage}
                                src={slide.image}
                                alt={`Slide ${slide.id}`}
                            />
                        </div>
                        <Carousel.Caption className={styles.customCaption}>
                            {/* <h3>{slide.caption}</h3> */}
                            {/* <p>{slide.description}</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Slider;