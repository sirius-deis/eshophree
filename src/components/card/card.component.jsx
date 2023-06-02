import PropTypes from 'prop-types';

import { StyledCard, StyledImageOverlay } from './card.styles';

import Button from '../button/button.component';

const Card = ({ btnTitle }) => {
  return (
    <StyledCard>
      <img src='https://source.unsplash.com/random/300×300?electronics' alt='card' />
      <StyledImageOverlay>
        <Button bgColor='var(--shadow-color-darker)' color='var(--bg-color)'>
          {btnTitle} &rarr;
        </Button>
      </StyledImageOverlay>
    </StyledCard>
  );
};

Card.propTypes = {
  btnTitle: PropTypes.string,
};

export default Card;
