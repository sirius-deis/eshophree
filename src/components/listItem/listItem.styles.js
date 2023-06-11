import styled from 'styled-components';

const StyledListItem = styled.li`
  font-size: 1.7rem;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  text-align: center;
  transition: background-color 0.5s ease-out;
  &:hover {
    backdrop-filter: brightness(90%);
  }
  a {
    text-decoration: none;
    color: ${(props) => (props.color ? `var(--${props.color})` : 'var(--bg-color)')};
  }
  &::first-letter {
    text-transform: uppercase;
  }
`;

export { StyledListItem };
