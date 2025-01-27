import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCard from './productCard';

describe('ProductCard Component', () => {
  const mockAddToCartHandler = jest.fn();
  const mockAddToComparisonHandler = jest.fn();

  const defaultProps = {
    image: { src: 'image.jpg', name: 'Product Image' },
    name: 'Product Name',
    price: 100,
    discount: 20,
    characteristics: ['Feature 1', 'Feature 2'],
    rating: 4,
    tags: ['Tag1', 'Tag2'],
    addToCartHandler: mockAddToCartHandler,
    addToComparisonHandler: mockAddToComparisonHandler,
  };

  it('should render product name', () => {
    render(<ProductCard {...defaultProps} />);
    expect(screen.getByText('Product Name')).toBeInTheDocument();
  });

  it('should render discounted price correctly', () => {
    render(<ProductCard {...defaultProps} />);
    expect(screen.getByText('$80')).toBeInTheDocument();
  });

  it('should render characteristics', () => {
    render(<ProductCard {...defaultProps} />);
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
  });

  it('should render tags', () => {
    render(<ProductCard {...defaultProps} />);
    expect(screen.getByText('Tag1')).toBeInTheDocument();
    expect(screen.getByText('Tag2')).toBeInTheDocument();
  });

  it('should call addToCartHandler when Add to Cart button is clicked', () => {
    render(<ProductCard {...defaultProps} />);
    fireEvent.click(screen.getByText(/Add to Cart/i));
    expect(mockAddToCartHandler).toHaveBeenCalled();
  });

  it('should call addToComparisonHandler when Compare button is clicked', () => {
    render(<ProductCard {...defaultProps} />);
    fireEvent.click(screen.getByText(/Compare/i));
    expect(mockAddToComparisonHandler).toHaveBeenCalled();
  });

  it('should render the correct number of stars based on rating', () => {
    render(<ProductCard {...defaultProps} />);
    expect(screen.getAllByTestId('star-filled').length).toBe(4);
    expect(screen.getAllByTestId('star-empty').length).toBe(1);
  });
});