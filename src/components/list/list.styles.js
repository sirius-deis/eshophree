import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.isColumn ? 'column' : 'row')};
  justify-content: space-around;
  list-style: none;
`;

export const StyledListItem = styled.li`
  font-size: inherit;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  text-align: ${(props) => (props.position ? props.position : 'center')};
  transition: background-color 0.5s ease-out;
  color: ${(props) => (props.color ? `var(--${props.color})` : 'var(--bg-color)')};
  &:hover {
    backdrop-filter: brightness(90%);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  &::first-letter {
    text-transform: uppercase;
  }
`;
