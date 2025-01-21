import styled from 'styled-components';

export const StyledDropdownItem = styled.button`
  width: 100%;
  padding: 1rem 0.3rem;
  font-size: 1.4rem;
  border: 0;
  cursor: pointer;
  background-color: var(--bg-color);
  &:hover {
    background-color: var(--footer-color);
  }
  &:first-letter {
    text-transform: uppercase;
  }
`;
