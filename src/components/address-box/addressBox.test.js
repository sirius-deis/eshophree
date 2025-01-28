import { render, screen , fireEvent} from '@testing-library/react';
import AddressBox from './addressBox';

describe('AddressBox Component', () => {
  it('should match snapshot', () => {
    const { container } = render(<AddressBox />);
    expect(container).toMatchSnapshot();
  });
  it('should render all label inputs correctly', () => {
    render(<AddressBox />);

    expect(screen.getByText(/First Name/)).toBeInTheDocument();
    expect(screen.getByText(/Last Name/)).toBeInTheDocument();
    expect(screen.getByText(/Street/)).toBeInTheDocument();
    expect(screen.getByText(/City/)).toBeInTheDocument();
    expect(screen.getByText(/State/)).toBeInTheDocument();
    expect(screen.getByText(/Zip Code/)).toBeInTheDocument();
    expect(screen.getByText(/Country/)).toBeInTheDocument();
    expect(screen.getByText(/Phone Number/)).toBeInTheDocument();
    expect(screen.getByText(/Email Address/)).toBeInTheDocument();
  });
  it('should update input value on change event', () => {
    render(<AddressBox />);
    
    const inputs = [
      { label: /First Name/, value: 'John' },
      { label: /Last Name/, value: 'Doe' },
      { label: /Street/, value: '123 Main St' },
      { label: /City/, value: 'Anytown' },
      { label: /State/, value: 'CA' },
      { label: /Zip Code/, value: '12345' },
      { label: /Country/, value: 'USA' },
      { label: /Phone Number/, value: '123-456-7890' },
      { label: /Email Address/, value: 'john.doe@example.com' }
    ];

    inputs.forEach(({ label, value }) => {
      const inputElement = screen.getByLabelText(label);
      fireEvent.change(inputElement, { target: { value } });
      expect(inputElement.value).toBe(value);
    });
  });
});