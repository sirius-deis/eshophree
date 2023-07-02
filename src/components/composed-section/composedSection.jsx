import styled from 'styled-components';
import Carousel from '../carousel/carousel';
import Card from '../card/card';
import MultiLevelCard from '../multi-level-card/multiLevelCard';
import useFetch from '../../hooks/useFetch';
import { divideArrayOnChunks } from '../../utils/util';

const StyledWrapper = styled.div`
  width: '25%';
`;

const ComposedSection = () => {
  const [top20Products, isTop20ProductsLoading] = useFetch('products?tags=top20');
  const [featuredProducts, isFeaturedProductsLoading] = useFetch('products?tags=featured');
  const [topSellingProducts, isTopSellingLoading] = useFetch('products?tags=top_selling');
  const [onSaleProducts, isOnSaleProductsLoading] = useFetch('products?tags=on_sale');
  return (
    <section>
      <StyledWrapper>
        {!isTop20ProductsLoading && (
          <Carousel title='Top 20' amount={1}>
            {divideArrayOnChunks(top20Products?.products || [], 2).map((array, i) => (
              <MultiLevelCard key={i}>
                {array.map((item, i) => (
                  <Card
                    key={i}
                    {...item}
                    height='25rem'
                    styles={{ border: '1px solid var(--footer-color)', borderRadius: '10px' }}
                  />
                ))}
              </MultiLevelCard>
            ))}
          </Carousel>
        )}
      </StyledWrapper>
      <StyledWrapper>
        {!isFeaturedProductsLoading && (
          <Carousel title='Featured Products' amount={1}>
            {divideArrayOnChunks(featuredProducts?.products || [], 2).map((array, i) => (
              <MultiLevelCard key={i}>
                {array.map((item, i) => (
                  <Card
                    key={i}
                    {...item}
                    height='25rem'
                    styles={{ border: '1px solid var(--footer-color)', borderRadius: '10px' }}
                  />
                ))}
              </MultiLevelCard>
            ))}
          </Carousel>
        )}
      </StyledWrapper>
      <StyledWrapper>
        {!isTopSellingLoading && (
          <Carousel title='Top selling Products' amount={1}>
            {divideArrayOnChunks(topSellingProducts?.products || [], 2).map((array, i) => (
              <MultiLevelCard key={i}>
                {array.map((item, i) => (
                  <Card
                    key={i}
                    {...item}
                    height='25rem'
                    styles={{ border: '1px solid var(--footer-color)', borderRadius: '10px' }}
                  />
                ))}
              </MultiLevelCard>
            ))}
          </Carousel>
        )}
      </StyledWrapper>
      <StyledWrapper>
        {!isOnSaleProductsLoading && (
          <Carousel title='On-Sale Products' amount={1}>
            {divideArrayOnChunks(onSaleProducts?.products || [], 2).map((array, i) => (
              <MultiLevelCard key={i}>
                {array.map((item, i) => (
                  <Card
                    key={i}
                    {...item}
                    height='25rem'
                    styles={{ border: '1px solid var(--footer-color)', borderRadius: '10px' }}
                  />
                ))}
              </MultiLevelCard>
            ))}
          </Carousel>
        )}
      </StyledWrapper>
    </section>
  );
};

export default ComposedSection;
