import PropTypes from 'prop-types';
import {StyledLine} from './line.styles'

const Line = ({ width }) => {
  return <StyledLine width={width} />;
};

Line.propTypes = {
  width: PropTypes.number,
};

export default Line;
