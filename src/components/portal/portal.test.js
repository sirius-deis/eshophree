import React from 'react';
import { render } from '@testing-library/react';
import Portal from './portal';

describe('Portal Component', () => {
  it('should render children into the specified wrapper element', () => {
    const wrapperId = 'portal-root';
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    document.body.appendChild(wrapperElement);
    const { getByText } = render(
      <Portal wrapperId={wrapperId}>
        <div>Portal Content</div>
      </Portal>
    );
    expect(getByText('Portal Content')).toBeInTheDocument();
  });
});