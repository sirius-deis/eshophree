import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledH2 = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => (props.color ? `var(--${props.color})` : 'var(--text-color-additional)')};
`;

const H2 = ({ children, color }) => {
  return <StyledH2 color={color}>{children}</StyledH2>;
};

H2.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default H2;
