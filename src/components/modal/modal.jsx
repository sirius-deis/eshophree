import { useEffect } from 'react';
import styled from 'styled-components';

import Portal from '../portal/portal';
import Button from '../button/button';

const StyledModal = styled.div`
  padding: 7rem 6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: var(--bg-color);
  font-size: 2rem;
  border-radius: 10px;
  transform: translate(-50%, -50%);
`;

const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--shadow-color);
  cursor: pointer;
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

const Modal = ({ children, closeModal }) => {
  const onBackdropClickHandler = (e) => {
    e.stopPropagation();
    closeModal();
  };

  useEffect(() => {
    const onKeyPressHandler = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', onKeyPressHandler);
    return () => {
      window.removeEventListener('keydown', onKeyPressHandler);
    };
  }, [closeModal]);

  return (
    <Portal wrapperId='modal'>
      <StyledBackdrop onClick={onBackdropClickHandler} />
      <StyledModal>
        {children}
        <StyledCloseButtonWrapper>
          <Button onClickHandler={closeModal}>&#x2715;</Button>
        </StyledCloseButtonWrapper>
      </StyledModal>
    </Portal>
  );
};

export default Modal;
