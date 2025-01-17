import PropTypes from 'prop-types';
import { StyledMultiLevelCard } from './multiLevelCard.styles'

const MultiLevelCard = ({ children }) => {
  return <StyledMultiLevelCard>{children}</StyledMultiLevelCard>;
};

MultiLevelCard.propTypes = {
  children: PropTypes.node,
};

export default MultiLevelCard;
