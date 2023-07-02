import { FaFireAlt } from 'react-icons/fa';
import Carousel from '../carousel/carousel';
import Card from '../card/card';
import Stock from '../stock/stock';
import useFetch from '../../hooks/useFetch';
import { StyledDealSection } from './dealSection.styles';

const DealSection = () => {
  const [dealProducts, isDealLoading] = useFetch('products?tags=deal_of_the_day');
  return (
    <StyledDealSection>
      {!isDealLoading && (
        <Carousel
          title='Deal Of The Day'
          amount={2}
          titleColor='additional-color'
          icon={<FaFireAlt color='var(--additional-color)' fontSize='2rem' />}
        >
          {(dealProducts?.products || []).map((item, i) => (
            <Card key={i} withStock {...item}>
              <Stock />
            </Card>
          ))}
        </Carousel>
      )}
    </StyledDealSection>
  );
};

export default DealSection;
