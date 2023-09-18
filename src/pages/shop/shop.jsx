import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '../../components/card/card';

import Accordion from '../../components/accordion/accordion';

const StyledShopPage = styled.main`
  margin-top: 2rem;
  display: flex;
  height: calc(100vh - 13.5rem);
`;

const StyledLeft = styled.div`
  height: 100%;
  flex: 1;
`;

const StyledRight = styled.div`
  height: 100%;
  flex: 4;
`;

const ShopPage = () => {
  const categories = useSelector((state) => state.category.categories);
  const location = useLocation();
  return (
    <div className='container'>
      {location.pathname.slice(1).split('/').join('>')}
      <StyledShopPage>
        <StyledLeft>
          <Accordion title='All Categories' list={categories} />
        </StyledLeft>
        <StyledRight></StyledRight>
      </StyledShopPage>
    </div>
  );
};

export default ShopPage;
