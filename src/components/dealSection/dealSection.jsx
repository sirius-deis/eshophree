import Carousel from '../carousel/carousel';

import { StyledDealSection } from './dealSection.styles';

const DealSection = () => {
  return (
    <div className='container'>
      <StyledDealSection>
        <Carousel title='Deal Of The Day' />
      </StyledDealSection>
    </div>
  );
};

export default DealSection;
