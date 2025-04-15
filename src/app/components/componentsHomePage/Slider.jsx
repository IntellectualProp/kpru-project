import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Slider.module.css";
import config from "../../../../config.js";

function Slider() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch(config.backend_url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSlides(data); // Assuming the API returns an array of slides
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.sliderContainer}>
      <Carousel fade interval={5000} className={styles.customCarousel}>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id} className={styles.customItem}>
            <div className={styles.slideImageContainer}>
              <img
                className={styles.slideImage}
                src={`data:image/jpeg;base64,${slide.image_binary}`}
                alt={`Slide ${slide.id}`}
              />
            </div>
            <Carousel.Caption className={styles.customCaption}>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
