import PropTypes from 'prop-types';
import { StyledBanner } from './banner.styles'

const Banner = ({ background }) => {
  return <StyledBanner background={background} />;
};

Banner.propTypes = {
  background: PropTypes.string,
};

export default Banner;
