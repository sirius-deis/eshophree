import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Line from '../line/line';
import Heading from '../heading/heading';
import Row from '../row/row';

import {
  StyledCarousel,
  StyledInner,
  StyledCarouseItem,
  StyledPrevControl,
  StyledNextControl,
} from './carousel.styles';

const Carousel = ({ children, banner, title, amount, titleColor, icon }) => {
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
          <Heading color={titleColor} >{title}</Heading>
        </div>
        <div>
          <StyledPrevControl onClick={() => shiftSlide(-1)} disabled={index === 0}>
            &lsaquo;
          </StyledPrevControl>
          <StyledNextControl
            onClick={() => shiftSlide(1)}
            disabled={(index + 1) * amount >= children.length}
          >
            &rsaquo;
          </StyledNextControl>
        </div>
      </Row>
      <Line width={100} />
      <div style={{ display: 'flex', gap: '1rem' }}>
        {banner}
        <div style={{ overflow: 'hidden' }}>
          <StyledInner
            style={{
              transform: `translateX(${(index + 1) * amount < children.length
                  ? -index * 100
                  : -(index - 1) * 100 + ((index * amount - children.length) / amount) * 100
                }%)`,
            }}
          >
            {React.Children.map(children, (child, i) => (
              <StyledCarouseItem className={index === i ? "active" : ""} amount={amount}>{React.cloneElement(child)}</StyledCarouseItem>
            ))}
          </StyledInner>
        </div>
      </div>
    </StyledCarousel>
  );
};

Carousel.propTypes = {
  children: PropTypes.node,
  banner: PropTypes.node,
  title: PropTypes.string,
  amount: PropTypes.number,
  titleColor: PropTypes.string,
  icon: PropTypes.node,
};

export default Carousel;
