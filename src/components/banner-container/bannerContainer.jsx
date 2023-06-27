import styled from 'styled-components';

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
      {banners.map((banner) => (
        <Banner background={banner.image} />
      ))}
    </StyledBannerContainer>
  );
};

export default BannerContainer;
