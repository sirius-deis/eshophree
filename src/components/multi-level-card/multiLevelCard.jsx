import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMultiLevelCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MultiLevelCard = ({ children }) => {
  return <StyledMultiLevelCard>{children}</StyledMultiLevelCard>;
};

MultiLevelCard.propTypes = {
  children: PropTypes.node,
};

export default MultiLevelCard;
