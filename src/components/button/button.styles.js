import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  min-height: 3.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  position: relative;
  font-size: 1.4rem;
  border: ${(props) => (props.bordered ? '1px solid var(--footer-color)' : '0')};
  background-color: ${(props) => (props.bgColor ? `var(--${props.bgColor})` : 'transparent')};
  color: ${(props) => (props.color ? `var(--${props.color})` : 'var(--text-color)')};
  cursor: pointer;
  &:hover {
    filter: brightness(95%);
  }
  &:disabled {
    filter: unset;
`;

export const StyledRoundButton = styled(StyledButton)`
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

export const StyledDropdownButton = styled(StyledButton)`
  padding: 1.5rem 1rem 1.5rem;
  justify-content: space-between;
`;

export const StyledPlainButton = styled(StyledButton)`
  padding: 1rem 1.4rem;
  border-radius: 10px;
  font-size: 1.6rem;
`;
