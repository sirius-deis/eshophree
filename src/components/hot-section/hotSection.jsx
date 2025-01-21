import Carousel from '../carousel/carousel';
import Card from '../card/card';
import MultiLevelCard from '../multi-level-card/multiLevelCard';
import useFetch from '../../hooks/useFetch';
import { divideArrayOnChunks } from '../../utils/util';
import { StyledHotSection } from './hotSection.styles'

const HotSection = () => {
  const [hotProducts, isHotLoading] = useFetch('products?tag=hot&fields=name,price,images');
  return (
    <StyledHotSection>
      {!isHotLoading && (
        <Carousel title='Hot Product' amount={3} titleColor='additional-color'>
          {divideArrayOnChunks(hotProducts?.products || [], 2, true).map((array, i) => {
            if ((i + 1) % 2 === 0) {
              return (
                <Card
                  key={i}
                  {...array[0]}
                  isColumn
                  styles={{ backgroundColor: 'var(--bg-color)' }}
                />
              );
            } else {
              return (
                <MultiLevelCard key={i}>
                  {array.map((item, i) => (
                    <Card
                      key={i}
                      {...item}
                      height='24rem'
                      styles={{ backgroundColor: 'var(--bg-color)' }}
                    />
                  ))}
                </MultiLevelCard>
              );
            }
          })}
        </Carousel>
      )}
    </StyledHotSection>
  );
};

export default HotSection;
