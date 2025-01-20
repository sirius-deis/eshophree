import Carousel from '../carousel/carousel';
import Card from '../card/card';
import MultiLevelCard from '../multi-level-card/multiLevelCard';
import useFetch from '../../hooks/useFetch';
import Spinner from '../spinner/spinner';
import { divideArrayOnChunks } from '../../utils/util';
import { StyledComposedSection, StyledWrapper } from './composedSection.styles'

const ComposedSection = () => {
  const [top20Products, isTop20ProductsLoading] = useFetch(
    'products?tag=top20&fields=name,price,images',
  );
  const [featuredProducts, isFeaturedProductsLoading] = useFetch(
    'products?tag=featured&fields=name,price,images',
  );
  const [topSellingProducts, isTopSellingLoading] = useFetch(
    'products?tag=top_selling&fields=name,price,images',
  );
  const [onSaleProducts, isOnSaleProductsLoading] = useFetch(
    'products?tag=on_sale&fields=name,price,images',
  );
  return (
    <StyledComposedSection>
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
        {isTop20ProductsLoading && <Spinner />}
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
        {isFeaturedProductsLoading && <Spinner />}
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
        {isTopSellingLoading && <Spinner />}
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
        {isOnSaleProductsLoading && <Spinner />}
      </StyledWrapper>
    </StyledComposedSection>
  );
};

export default ComposedSection;
