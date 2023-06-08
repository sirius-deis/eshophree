import { useState, useEffect } from 'react';
import { FaFireAlt } from 'react-icons/fa';
import Line from '../line/line';
import H2 from '../h2/h2';
import Row from '../row/row';
import Card from '../card/card';

import {
  StyledCarousel,
  StyledInner,
  StyledCarouseItem,
  StyledPrevControl,
  StyledNextControl,
} from './carousel.styles';

const length = 6;

const Carousel = ({ title }) => {
  const [index, setIndex] = useState(0);

  const shiftSlide = (n) => {
    setIndex((prevState) => {
      return prevState + n;
    });
  };
  return (
    <StyledCarousel>
      <Row>
        <div>
          <H2 color='additional-color'>
            <FaFireAlt />
            {title}
          </H2>
        </div>
        <div>
          <StyledPrevControl onClick={() => shiftSlide(-1)} disabled={index === 0}>
            &lsaquo;
          </StyledPrevControl>
          <StyledNextControl onClick={() => shiftSlide(1)} disabled={index === length - 2}>
            &rsaquo;
          </StyledNextControl>
        </div>
      </Row>
      <Line width={100} />
      <StyledInner style={{ transform: `translateX(${-index * 50}%)` }}>
        {Array(length)
          .fill(null)
          .map((_, i) => (
            <StyledCarouseItem key={i}>
              <Card />
            </StyledCarouseItem>
          ))}
      </StyledInner>
    </StyledCarousel>
  );
};

export default Carousel;
