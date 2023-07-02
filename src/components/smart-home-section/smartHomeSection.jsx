import Carousel from '../carousel/carousel';
import Card from '../card/card';
import MultiLevelCard from '../multi-level-card/multiLevelCard';
import Banner from '../../components/banner/banner';
import useFetch from '../../hooks/useFetch';
import { divideArrayOnChunks } from '../../utils/util';

const SmartHomeSection = () => {
  const [hotProducts, isHotLoading] = useFetch('products?tags=smart_home');
  return (
    <section>
      {!isHotLoading && (
        <Carousel
          title='Smart Home Appliances'
          banner={<Banner background='https://source.unsplash.com/random/300×650?advertisment' />}
          amount={5}
        >
          {divideArrayOnChunks(hotProducts?.products || [], 2).map((array, i) => (
            <MultiLevelCard key={i}>
              {array.map((item, i) => (
                <Card
                  key={i}
                  {...item}
                  isColumn
                  height='30rem'
                  styles={{ border: '1px solid var(--footer-color)', borderRadius: '10px' }}
                />
              ))}
            </MultiLevelCard>
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default SmartHomeSection;
