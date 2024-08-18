import PropTypes from 'prop-types';
import {StyledRow} from './row.styles'

const Row = ({ children, gap }) => {
  return <StyledRow gap={gap}>{children}</StyledRow>;
};

Row.propTypes = {
  children: PropTypes.node,
  gap: PropTypes.number,
};

export default Row;
