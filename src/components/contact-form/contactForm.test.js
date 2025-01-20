import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from './contactForm';

describe('ContactForm Component', () => {
  const mockClickHandler = jest.fn();

  const defaultProps = {
    title: 'Contact Us',
    text: 'Please fill out the form below to contact us.',
    clickHandler: mockClickHandler,
    isLoading: false,
    error: null,
    isSubmitted: false,
  };

  it('should render the form with title and text', () => {
    render(<ContactForm {...defaultProps} />);
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('Please fill out the form below to contact us.')).toBeInTheDocument();
  });

  it('should call clickHandler with form data on submit', () => {
    const mockClickHandler = jest.fn();
    render(<ContactForm {...defaultProps} clickHandler={mockClickHandler} />);
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Subject/i), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByPlaceholderText(/Your message/i), { target: { value: 'Test Message' } });
    fireEvent.click(screen.getByRole("button"));

    expect(mockClickHandler).toHaveBeenCalledWith('test@example.com', 'Test Subject', 'Test Message');
  });

  it('should display a spinner when loading', () => {
    render(<ContactForm {...defaultProps} isLoading={true} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should display an error message when there is an error', () => {
    render(<ContactForm {...defaultProps} error="Error occurred" />);
    expect(screen.getByText('Error occurred')).toBeInTheDocument();
  });

  it('should display a success message when submitted', () => {
    render(<ContactForm {...defaultProps} isSubmitted={true} />);
    expect(screen.getByText('Thank you for your submitting!')).toBeInTheDocument();
  });
});