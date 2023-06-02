import { StyledHero, StyledColoredContainer } from './hero.styles';

import Carousel from '../carousel/carousel.component';
import Card from '../card/card.component';

const Hero = () => {
  return (
    <StyledColoredContainer>
      <div className='container'>
        <StyledHero>
          <Carousel />
          <Card btnTitle='Now available' />
          <Card btnTitle='Order now' />
        </StyledHero>
      </div>
    </StyledColoredContainer>
  );
};

export default Hero;
