import { render, screen, fireEvent } from '@testing-library/react';

import Dropdown from './dropdown';

describe('Dropdown component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Dropdown>Some content</Dropdown>);
    expect(container).toMatchSnapshot();
  });
  it('should render element', () => {
    render(<Dropdown>Some content</Dropdown>);
    const content = screen.getByText(/Some content/);
    expect(content).toBeInTheDocument();
  });
  it('should fire an click event', () => {
    const fn = jest.fn();
    render(<Dropdown onMouseLeaveHandler={fn}>Some content</Dropdown>);
    fireEvent.mouseLeave(screen.getByText('Some content'));
    expect(fn).toHaveBeenCalled();
  });
});
