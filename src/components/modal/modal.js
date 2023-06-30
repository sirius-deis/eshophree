import styled from 'styled-components';

import Button from '../button/button';

const StyledModal = styled.div`
  padding: 5rem 4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: var(--bg-color);
  font-size: 2rem;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  box-shadow: 2px 1px 3px 3px var(--shadow-color);
`;

const StyledCloseButtonWrapper = styled.div`
  opacity: 0;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  transition: opacity 0.2s ease-out;
  &:hover {
    opacity: 1;
  }
`;

const Modal = ({ children, clickHandler }) => {
  return (
    <StyledModal>
      {children}
      <StyledCloseButtonWrapper>
        <Button onClickHandler={clickHandler}>&#x2715;</Button>
      </StyledCloseButtonWrapper>
    </StyledModal>
  );
};

export default Modal;
