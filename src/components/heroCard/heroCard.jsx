import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { StyledCard, StyledImageOverlay } from './heroCard.styles';

import Button from '../button/button';

const HeroCard = ({ btnTitle }) => {
  return (
    <StyledCard>
      <img src='https://source.unsplash.com/random/400×200?electronics' alt='card' />
      <StyledImageOverlay>
        <Button bgColor='shadow-color-darker' color='bg-color'>
          <Link>{btnTitle} &rarr;</Link>
        </Button>
      </StyledImageOverlay>
    </StyledCard>
  );
};

HeroCard.propTypes = {
  btnTitle: PropTypes.string,
};

export default HeroCard;
