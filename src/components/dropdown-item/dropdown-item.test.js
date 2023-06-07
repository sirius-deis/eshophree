import { render, screen, fireEvent } from '@testing-library/react';

import DropdownItem from './dropdownItem';

describe('DropdownItem component', () => {
  it('should match snapshot', () => {
    const { container } = render(<DropdownItem value='Some value' />);
    expect(container).toMatchSnapshot();
  });

  it('should render component with given value', () => {
    render(<DropdownItem value='Some value' />);
    const value = screen.getByText(/some value/i);
    expect(value).toBeInTheDocument();
  });

  it('should fire a click event on component', () => {
    const fn = jest.fn();
    render(<DropdownItem value='Some value' onSelectCategoryHandler={fn} />);
    fireEvent.click(screen.queryByText(/some value/i));
    expect(fn).toHaveBeenCalled();
  });
});
