import styled from 'styled-components';

export const StyledModal = styled.div`
  padding: 7rem 6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: var(--bg-color);
  font-size: 2rem;
  border-radius: 10px;
  transform: translate(-50%, -50%);
`;

export const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--shadow-color);
  cursor: pointer;
`;

export const StyledCloseButtonWrapper = styled.div`
  opacity: 0;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  transition: opacity 0.2s ease-out;
  &:hover {
    opacity: 1;
  }
`;