import useFetch from '../../hooks/useFetch';
import Carousel from '../../components/carousel/carousel';
import Card from '../../components/card/card';

const TrendingSection = () => {
  const [trendingProducts, isTrendingLoading] = useFetch(
    'products?tag=trending&fields=name,price,images',
  );
  return (
    <section>
      {!isTrendingLoading && (
        <Carousel title='Trending Products' amount={5}>
          {(trendingProducts?.products || []).map((item, i) => (
            <Card key={i} {...item} isColumn />
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default TrendingSection;
