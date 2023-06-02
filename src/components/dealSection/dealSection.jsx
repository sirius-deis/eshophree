import { StyledDealSection } from './dealSection.styles';

import Carousel from '../carousel/carousel';

const DealSection = () => {
  return (
    <div className='container'>
      <StyledDealSection>
        <Carousel />
      </StyledDealSection>
    </div>
  );
};

export default DealSection;
