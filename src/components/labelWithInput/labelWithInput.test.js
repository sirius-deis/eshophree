import { render, screen, fireEvent } from '@testing-library/react';
import LabelWithInput from './labelWithInput';

describe('LabelWithInput component', () => {
  it('should match snapshot', () => {
    const { container } = render(<LabelWithInput />);
    expect(container).toMatchSnapshot();
  });
  it('should render component with given label', () => {
    render(<LabelWithInput label='name' />);
    const label = screen.queryByLabelText(/name \*/i);
    expect(label).toBeInTheDocument();
  });
  it('should render component with given placeholder', () => {
    render(<LabelWithInput placeholder='Enter your name' />);
    const input = screen.getByPlaceholderText(/enter your name/i);
    expect(input).toBeInTheDocument();
  });
  it('should render component with placeholder without providing value', () => {
    render(<LabelWithInput />);
    const input = screen.getByPlaceholderText(/enter your text/i);
    expect(input).toBeInTheDocument();
  });
  it('should render component which is email and check its validity', () => {
    render(<LabelWithInput type='email' />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: 'aaaa',
      },
    });
    const input = screen.getByRole('textbox');
    expect(input.checkValidity()).toBeFalsy();

    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: 'test@test.com',
      },
    });
    const input2 = screen.getByRole('textbox');
    expect(input2.checkValidity()).toBeTruthy();
  });
});
