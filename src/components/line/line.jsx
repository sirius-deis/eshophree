import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLine = styled.div`
  width: ${(props) => props.width}%;
  height: 1px;
  background-color: var(--footer-color);
`;

const Line = ({ width }) => {
  return <StyledLine width={width} />;
};

Line.propTypes = {
  width: PropTypes.number,
};

export default Line;
