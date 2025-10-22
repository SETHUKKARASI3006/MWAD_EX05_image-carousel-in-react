# MWAD_EX05_image-carousel-in-react
## Date: 22-10-2025

## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## PROGRAM
### App.jsx:

```
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
```

### App.css:

```
.carousel-container {
  max-width: 100%;
  margin: 40px; 
  position: relative;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  align-content: center;
}

.carousel-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
  min-height: 300px;
}

.carousel-controls {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  padding: 0 10px;
  box-sizing: border-box;
}

.prev-button,
.next-button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  z-index: 10;
}

.prev-button:hover,
.next-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.carousel-indicators {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.indicator-dot {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.indicator-dot.active {
  background-color: #007bff;
  transform: scale(1.2);
}

.indicator-dot:hover {
  background-color: #007bff;
}
```

## OUTPUT

<img width="1919" height="909" alt="image" src="https://github.com/user-attachments/assets/c9bde729-a93c-45ef-b1c7-ab32bfffc28a" />

<img width="1919" height="879" alt="image" src="https://github.com/user-attachments/assets/0b10915f-c5ff-4ed9-823a-e86fb664dc81" />

<img width="1914" height="897" alt="image" src="https://github.com/user-attachments/assets/42ac1df9-d6b7-41cb-90ab-f1a4205f0501" />

## RESULT
The program for creating Image Carousel using React is executed successfully.
