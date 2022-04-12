import React, { useState, useEffect } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(items.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        return prev < totalItems - 1 ? prev + 1 : 0;
      });
    }, 5000);
    // return clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {items.map(({ img, title, text }, i) => {
        const [first, second, ...rest] = title.split(' ');
        return (
          <div
            key={i}
            className={`item-wrapper ${currentIndex === i ? 'show' : ''}`}
          >
            <div className="bg-img-container">
              <img src={img} className="bg-img" />
            </div>
            <h1 className="carousel-title">
              {first} <span> {second} </span> {rest.join(' ')}
            </h1>
            <p className="carousel-text">{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
