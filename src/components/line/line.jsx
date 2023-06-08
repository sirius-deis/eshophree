import styled from 'styled-components';

const StyledLine = styled.div`
  width: ${(props) => props.width}%;
  height: 1px;
  background-color: var(--footer-color);
`;

const Line = ({ width }) => {
  return <StyledLine width={width} />;
};

export default Line;
