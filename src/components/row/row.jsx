import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : 0)}rem;
`;

const Row = ({ children, gap }) => {
  return <StyledRow gap={gap}>{children}</StyledRow>;
};

export default Row;
