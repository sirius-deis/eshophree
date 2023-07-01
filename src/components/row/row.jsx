import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : 0)}rem;
`;

const Row = ({ children, gap }) => {
  return <StyledRow gap={gap}>{children}</StyledRow>;
};

Row.propTypes = {
  children: PropTypes.node,
  gap: PropTypes.number,
};

export default Row;
