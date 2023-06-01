import styled from 'styled-components';

const StyledSearch = styled.form`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--footer-color);
  box-shadow: 1px 1px 1px var(--shadow-color);
  border-radius: 25px;
`;

const StyledSearchInput = styled.input`
  width: 75%;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  border: none;
  border-left: 1px solid var(--footer-color);
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const StyledText = styled.div`
  width: 100%;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &::first-letter {
    text-transform: uppercase;
  }
  &.opened + svg {
    transform: rotate(180deg);
  }
`;

export { StyledSearch, StyledSearchInput, StyledText };
