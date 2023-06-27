import { FaFireAlt } from 'react-icons/fa';
import Carousel from '../carousel/carousel';
import Card from '../card/card';
import Stock from '../stock/stock';
import { StyledDealSection } from './dealSection.styles';

const DealSection = () => {
  const dummy = [
    {
      image: 'https://source.unsplash.com/random/300×350?computers',
      category: 'computer',
      name: 'Some name 1',
      price: 140,
      discount: 10,
      total: 43,
      sold: 7,
      endIn: new Date('2023-06-14'),
    },
    {
      image: 'https://source.unsplash.com/random/300×350?phones',
      category: 'phone',
      name: 'Some name 2',
      price: 220,
      discount: 20,
      total: 30,
      sold: 24,
      endIn: new Date('2023-06-15'),
    },
    {
      image: 'https://source.unsplash.com/random/300×350?headphones',
      category: 'headphones',
      name: 'Some name 3',
      price: 160,
      discount: 30,
      total: 10,
      sold: 8,
      endIn: new Date('2023-06-16'),
    },
    {
      image: 'https://source.unsplash.com/random/300×350?laptops',
      category: 'laptops',
      name: 'Some name 4',
      price: 400,
      discount: 25,
      total: 10,
      sold: 4,
      endIn: new Date('2023-06-17'),
    },
  ];
  return (
    <StyledDealSection>
      <Carousel
        title='Deal Of The Day'
        amount={2}
        titleColor='additional-color'
        icon={<FaFireAlt color='var(--additional-color)' fontSize='2rem' />}
      >
        {dummy.map((item, i) => (
          <Card key={i} withStock {...item}>
            <Stock />
          </Card>
        ))}
      </Carousel>
    </StyledDealSection>
  );
};

export default DealSection;
