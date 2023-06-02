import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  border: 0;
  cursor: pointer;
  &:hover {
    filter: brightness(95%);
  }
`;

const StyledRoundButton = styled(StyledButton)`
  margin: 0.5rem;
  padding: 0.3rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  font-size: 3rem;
  &:hover {
    transform: scale(1.2);
  }
`;

const StyledDropdownButton = styled(StyledButton)`
  padding: 1.5rem 1rem 1.5rem;
  justify-content: space-between;
`;

const StyledPlainButton = styled(StyledButton)`
  border-radius: 10px;
  padding: 0.6rem 1.4rem;
`;

export { StyledPlainButton, StyledRoundButton, StyledDropdownButton };
