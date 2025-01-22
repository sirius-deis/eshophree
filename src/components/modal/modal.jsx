import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Portal from '../portal/portal';
import Button from '../button/button';

import { StyledBackdrop, StyledCloseButtonWrapper, StyledModal } from './modal.styles'

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
      <StyledBackdrop onClick={onBackdropClickHandler} data-testid="backdrop" />
      <StyledModal>
        {children}
        <StyledCloseButtonWrapper>
          <Button onClickHandler={closeModal}>&#x2715;</Button>
        </StyledCloseButtonWrapper>
      </StyledModal>
    </Portal>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  closeModal: PropTypes.func,
};

export default Modal;
