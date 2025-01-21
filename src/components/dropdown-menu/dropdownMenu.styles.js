import styled from 'styled-components';

export const StyledDropdownMenu = styled.div`
  min-width: 23rem;
  max-height: 29.6rem;
  position: absolute;
  left: 0;
  top: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  box-shadow: 2px 2px 3px var(--shadow-color);
  z-index: 99;
`;
