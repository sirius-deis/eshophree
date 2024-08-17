import PropTypes from 'prop-types';
import {StyledBanner} from './banner.styles'

const Banner = ({ background }) => {
  return <StyledBanner style={{ background: `center / contain no-repeat url(${background})` }} />;
};

Banner.propTypes = {
  background: PropTypes.string,
};

export default Banner;
