import React, { useState, useEffect } from 'react';
import './App.css';

const images = [
  './1.jpeg',
  './2.jpeg',
  './3.jpeg',
  './4.jpeg',
];

const AUTO_SLIDE_DELAY = 5000;

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, AUTO_SLIDE_DELAY);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />
      <div className="carousel-controls">
        <button onClick={prevImage} className="prev-button">
          &lt; Previous
        </button>
        <button onClick={nextImage} className="next-button">
          Next &gt;
        </button>
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default App;