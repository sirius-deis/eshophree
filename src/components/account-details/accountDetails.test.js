import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccountDetails from './accountDetails';

describe('AccountDetails Component', () => {
  it('should render account information section', () => {
    render(<AccountDetails />);
    expect(screen.getByText(/account information/i)).toBeInTheDocument();
  });

  it('should render password change section', () => {
    render(<AccountDetails />);
    expect(screen.getByText(/password change/i)).toBeInTheDocument();
  });

  test('renders all input fields', () => {
    render(<AccountDetails />);
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/current password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^new password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm new password/i)).toBeInTheDocument();
  });

  it('should allow input value changes', () => {
    render(<AccountDetails />);
    
    const firstNameInput = screen.getByLabelText(/first name/i);
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(firstNameInput.value).toBe('John');

    const lastNameInput = screen.getByLabelText(/last name/i);
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    expect(lastNameInput.value).toBe('Doe');

    const emailInput = screen.getByLabelText(/email address/i);
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    expect(emailInput.value).toBe('john.doe@example.com');
  });

  it('should render save changes button', () => {
    render(<AccountDetails />);
    expect(screen.getByRole('button', { name: /save changes/i })).toBeInTheDocument();
  });
});