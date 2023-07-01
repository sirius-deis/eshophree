import styled from 'styled-components';
import PropTypes from 'prop-types';

import Banner from '../banner/banner';

const StyledBannerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 15rem;
`;

const BannerContainer = ({ banners }) => {
  return (
    <StyledBannerContainer>
      {banners.map((banner, i) => (
        <Banner key={i} background={banner.image} />
      ))}
    </StyledBannerContainer>
  );
};

BannerContainer.propTypes = {
  banners: PropTypes.array,
};

export default BannerContainer;
