import PropTypes from 'prop-types';

import Banner from '../banner/banner';
import { StyledBannerContainer } from './bannerContainer.styles'

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
