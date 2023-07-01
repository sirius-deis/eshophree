import styled from 'styled-components';
import PropTypes from 'prop-types';
import Carousel from '../carousel/carousel';
import Card from '../card/card';
import MultiLevelCard from '../multi-level-card/multiLevelCard';
import { divideArrayOnChunks } from '../../utils/util';

const StyledHotSection = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 20rem;
  padding: 1.5rem 2.5rem;
  border-radius: 10px;
`;

const HotSection = ({ products = [] }) => {
  console.log(divideArrayOnChunks(products, 2, true));
  return (
    <StyledHotSection>
      <Carousel title='Hot Product' amount={3} titleColor='additional-color'>
        {divideArrayOnChunks(products, 2, true).map((array, i) => {
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
                    height='24.5rem'
                    styles={{ backgroundColor: 'var(--bg-color)' }}
                  />
                ))}
              </MultiLevelCard>
            );
          }
        })}
      </Carousel>
    </StyledHotSection>
  );
};

HotSection.propTypes = {
  products: PropTypes.array,
};

export default HotSection;
