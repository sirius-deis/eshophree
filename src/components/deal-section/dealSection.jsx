import { FaFireAlt } from 'react-icons/fa';
import Carousel from '../carousel/carousel';
import Card from '../card/card';
import Stock from '../stock/stock';
import { StyledDealSection } from './dealSection.styles';

const DealSection = ({ products = [] }) => {
  return (
    <StyledDealSection>
      <Carousel
        title='Deal Of The Day'
        amount={2}
        titleColor='additional-color'
        icon={<FaFireAlt color='var(--additional-color)' fontSize='2rem' />}
      >
        {products.map((item, i) => (
          <Card key={i} withStock {...item}>
            <Stock />
          </Card>
        ))}
      </Carousel>
    </StyledDealSection>
  );
};

export default DealSection;
