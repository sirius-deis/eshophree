import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBanner = styled.div`
  min-width: 25rem;
  min-height: 100%;
  flex: 1;
`;

const Banner = ({ background }) => {
  return <StyledBanner style={{ background: `center / contain no-repeat url(${background})` }} />;
};

Banner.propTypes = {
  background: PropTypes.string,
};

export default Banner;
