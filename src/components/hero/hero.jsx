import { StyledHero, StyledColoredContainer } from './hero.styles';

import HeroCarousel from '../heroCarousel/heroCarousel';
import Card from '../card/card';

const Hero = () => {
  return (
    <StyledColoredContainer>
      <div className='container'>
        <StyledHero>
          <HeroCarousel />
          <Card btnTitle='Now available' />
          <Card btnTitle='Order now' />
        </StyledHero>
      </div>
    </StyledColoredContainer>
  );
};

export default Hero;
