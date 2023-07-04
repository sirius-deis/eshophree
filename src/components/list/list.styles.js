import styled from 'styled-components';

const StyledList = styled.ul`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.isColumn ? 'column' : 'row')};
  justify-content: space-around;
  list-style: none;
`;

export { StyledList };
