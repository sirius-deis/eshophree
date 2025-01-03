import { render, screen } from '@testing-library/react';
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
});