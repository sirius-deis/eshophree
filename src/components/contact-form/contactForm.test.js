import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from './contactForm';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

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

  

  it('displays a spinner when loading', () => {
    render(<ContactForm {...defaultProps} isLoading={true} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('displays an error message when there is an error', () => {
    render(<ContactForm {...defaultProps} error="Error occurred" />);
    expect(screen.getByText('Error occurred')).toBeInTheDocument();
  });

  it('displays a success message when submitted', () => {
    render(<ContactForm {...defaultProps} isSubmitted={true} />);
    expect(screen.getByText('Thank you for your submitting!')).toBeInTheDocument();
  });
});