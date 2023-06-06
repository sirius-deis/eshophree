import { render, screen, fireEvent } from '@testing-library/react';

import Button from './button';

describe('Button component', () => {
  it('should match snapshot with kind round', () => {
    const { container } = render(<Button kind='round'>Loading</Button>);
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot with kind dropdown', () => {
    const { container } = render(<Button kind='dropdown'>Loading</Button>);
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot with kind default', () => {
    const { container } = render(<Button>Loading</Button>);
    expect(container).toMatchSnapshot();
  });
  it('should fire event on dropdown type', () => {
    const fn = jest.fn();
    render(
      <Button kind={'dropdown'} onClickHandler={fn}>
        Loading
      </Button>,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(fn).toHaveBeenCalled();
  });
});
