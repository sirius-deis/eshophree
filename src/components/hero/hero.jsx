import { FaShippingFast } from 'react-icons/fa';
import { BiCheckShield, BiSupport } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';

import {
  StyledHero,
  StyledColoredContainer,
  StyledInfo,
  StyledItem,
  StyledText,
} from './hero.styles';

import HeroCarousel from '../hero-carousel/heroCarousel';
import HeroCard from '../hero-card/heroCard';

const Hero = () => {
  return (
    <StyledColoredContainer>
      <div className='container'>
        <StyledHero>
          <HeroCarousel />
          <HeroCard btnTitle='Now available' />
          <HeroCard btnTitle='Order now' />
        </StyledHero>
        <StyledInfo>
          <StyledItem>
            <FaShippingFast />
            <StyledText>
              <p>Free Shipping</p>
              <p>Free Shipping for orders over $200</p>
            </StyledText>
          </StyledItem>
          <StyledItem>
            <BiCheckShield />
            <StyledText>
              <p>Money Guarantee</p>
              <p>Within 30 days ofr an exchange</p>
            </StyledText>
          </StyledItem>
          <StyledItem>
            <BiSupport />
            <StyledText>
              <p>Online Support</p>
              <p>24 hours a day, 7 days a week</p>
            </StyledText>
          </StyledItem>
          <StyledItem>
            <MdPayment />
            <StyledText>
              <p>Flexible Payment</p>
              <p>Pay with Multiple Credit Cards</p>
            </StyledText>
          </StyledItem>
        </StyledInfo>
      </div>
    </StyledColoredContainer>
  );
};

export default Hero;
