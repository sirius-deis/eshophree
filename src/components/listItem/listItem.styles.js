import styled from 'styled-components';

const StyledListItem = styled.li`
  font-size: 1.7rem;
  padding: 1.5rem;
  cursor: pointer;
  width: calc(100% / 6);
  text-align: center;
  transition: background-color 0.5s ease-out;
  &:hover {
    background-color: var(--additional-color-darker);
  }
  a {
    text-decoration: none;
    color: var(--bg-color);
  }
  &::first-letter {
    text-transform: uppercase;
  }
`;

export { StyledListItem };
