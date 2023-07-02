import { useSelector } from 'react-redux';
import Carousel from '../carousel/carousel';
import Card from '../card/card';

const RecentlyViewedSection = () => {
  const recentlyViewed = useSelector((state) => state.user.recentlyViewed);
  return (
    <section>
      <Carousel title='Recently Viewed' amount={7}>
        {recentlyViewed.map((item, i) => (
          <Card key={i} {...item} isColumn />
        ))}
      </Carousel>
    </section>
  );
};

export default RecentlyViewedSection;
