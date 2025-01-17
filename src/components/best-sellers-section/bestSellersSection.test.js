import React from 'react';
import { render, screen } from '@testing-library/react';
import BestSellersSection from './bestSellersSection';
import useFetch from '../../hooks/useFetch';

// Mock the useFetch hook
jest.mock('../../hooks/useFetch');

describe('BestSellersSection', () => {
  it('renders loading state initially', () => {
    useFetch.mockReturnValue([null, true]);
    render(<BestSellersSection />);
    expect(screen.queryByText('Best Sellers')).not.toBeInTheDocument();
  });

  // it('renders products when data is fetched', () => {
  //   const mockProducts = {
  //     products: [
  //       { _id: 1, name: 'Product 1', price: 100, images: [] },
  //       { _id: 2, name: 'Product 2', price: 200, images: [] },
  //     ],
  //   };
  //   useFetch.mockReturnValue([mockProducts, false]);
  //   render(<BestSellersSection />);
  //   expect(screen.getByText('Best Sellers')).toBeInTheDocument();
  //   expect(screen.getByText('Product 1')).toBeInTheDocument();
  //   expect(screen.getByText('Product 2')).toBeInTheDocument();
  // });
});