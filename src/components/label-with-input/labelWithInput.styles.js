import styled from 'styled-components';

const StyledLabelWithInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledLabel = styled.label`
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--text-color-additional);
`;

const StyledInput = styled.input`
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.7rem;
  font-size: 1.6rem;
  background-color: transparent;
  border: 1px solid var(--footer-color);
  border-radius: 7px;
  &:focus {
    outline: none;
    box-shadow: 1px 2px 2px var(--shadow-color);
  }
  &::placeholder {
    color: var(--text-color-additional);
  }
`;

export { StyledLabelWithInput, StyledLabel, StyledInput };
