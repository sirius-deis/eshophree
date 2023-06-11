import React, { useState } from 'react';
import Line from '../line/line';
import H2 from '../h2/h2';
import Row from '../row/row';

import {
  StyledCarousel,
  StyledInner,
  StyledCarouseItem,
  StyledPrevControl,
  StyledNextControl,
} from './carousel.styles';

const Carousel = ({ children, title, amount, titleColor, icon }) => {
  const [index, setIndex] = useState(0);

  const shiftSlide = (n) => {
    setIndex((prevState) => {
      return prevState + n;
    });
  };
  return (
    <StyledCarousel>
      <Row>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          {icon}
          <H2 color={titleColor}>{title}</H2>
        </div>
        <div>
          <StyledPrevControl onClick={() => shiftSlide(-1)} disabled={index === 0}>
            &lsaquo;
          </StyledPrevControl>
          <StyledNextControl onClick={() => shiftSlide(1)} disabled={index * amount >= children.length - 1}>
            &rsaquo;
          </StyledNextControl>
        </div>
      </Row>
      <Line width={100} />
      <StyledInner style={{ transform: `translateX(${-index * 50}%)` }}>
        {React.Children.map(children, (child) => (
          <StyledCarouseItem amount={amount}>{React.cloneElement(child)}</StyledCarouseItem>
        ))}
      </StyledInner>
    </StyledCarousel>
  );
};

export default Carousel;
