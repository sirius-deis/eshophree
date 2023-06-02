import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledCard, StyledImageOverlay } from './card.styles';

import Button from '../button/button';

const Card = ({ btnTitle }) => {
  return (
    <StyledCard>
      <img src='https://source.unsplash.com/random/300×300?electronics' alt='card' />
      <StyledImageOverlay>
        <Button bgColor='var(--shadow-color-darker)' color='var(--bg-color)'>
          <Link>{btnTitle} &rarr;</Link>
        </Button>
      </StyledImageOverlay>
    </StyledCard>
  );
};

Card.propTypes = {
  btnTitle: PropTypes.string,
};

export default Card;
