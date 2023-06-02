import { useState, useEffect } from 'react';

import {
  StyledCarousel,
  StyledInner,
  StyledCarouseItem,
  StyledPrevControl,
  StyledNextControl,
  StyledIndicators,
  StyledCarouselOverlay,
} from './carousel.styles';
import Button from '../button/button.component';

const size = 4;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const shiftSlide = (n = 1) => {
    if (n === 1 && currentSlide >= size - 1) {
      return setCurrentSlide(0);
    }
    if (n === -1 && currentSlide <= 0) {
      return setCurrentSlide(size - 1);
    }
    setCurrentSlide((prevState) => {
      return prevState + n;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => shiftSlide(), 10000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <StyledCarousel>
      <StyledIndicators>
        {Array(size)
          .fill(null)
          .map((_, i) => (
            <button
              key={i}
              className={`${currentSlide === i ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
            ></button>
          ))}
      </StyledIndicators>
      <StyledInner style={{ transform: `translateX(${-100 * currentSlide}%)` }}>
        {Array(size)
          .fill(null)
          .map((_, i) => (
            <StyledCarouseItem key={i}>
              <img src='https://source.unsplash.com/random/300×300?electronics' alt='slide' />
              <StyledCarouselOverlay>
                <Button bgColor='var(--shadow-color-darker)' color='var(--bg-color)'>
                  Now available &rarr;
                </Button>
              </StyledCarouselOverlay>
            </StyledCarouseItem>
          ))}
      </StyledInner>
      <StyledPrevControl onClick={() => shiftSlide(-1)}>&lsaquo;</StyledPrevControl>
      <StyledNextControl onClick={() => shiftSlide(1)}>&rsaquo;</StyledNextControl>
    </StyledCarousel>
  );
};

export default Carousel;
