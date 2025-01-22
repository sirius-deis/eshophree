import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './modal';

describe('Modal Component', () => {
  let closeModalMock;

  beforeEach(() => {
    closeModalMock = jest.fn();
  });

  const wrapperId = 'modal';
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);

  it('should render children inside the modal', () => {
    const { getByText } = render(
      <Modal closeModal={closeModalMock}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(getByText('Modal Content')).toBeInTheDocument();
  });

  it('should call closeModal when the backdrop is clicked', () => {
    const { getByTestId } = render(
      <Modal closeModal={closeModalMock}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.click(getByTestId('backdrop'));
    expect(closeModalMock).toHaveBeenCalled();
  });

  it('should call closeModal when the close button is clicked', () => {
    const { getByRole } = render(
      <Modal closeModal={closeModalMock}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.click(getByRole('button'));
    expect(closeModalMock).toHaveBeenCalled();
  });

  it('should call closeModal when the Escape key is pressed', () => {
    render(
      <Modal closeModal={closeModalMock}>
        <div>Modal Content</div>
      </Modal>
    );

    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' });
    expect(closeModalMock).toHaveBeenCalled();
  });
});