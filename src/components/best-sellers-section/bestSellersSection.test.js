import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BestSellersSection from './bestSellersSection';
import useFetch from '../../hooks/useFetch';

jest.mock("../card/card.jsx", () => ({
  __esModule: true,
  default: ({ name, price }) => (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  )
}))

jest.mock('../../hooks/useFetch', () => ({
  __esModule: true,
  default: jest.fn()
}));

describe('BestSellersSection', () => {
  it('should render loading state initially', () => {
    useFetch.mockReturnValue([null, true]);
    render(<Router><BestSellersSection /></Router>);
    expect(screen.queryByText('Best Sellers')).not.toBeInTheDocument();
  });

  it('should render products when data is fetched', () => {
    const mockProducts = {
      products: [
        { _id: "j34ogr3og", name: 'Product 1', price: 100, total: 300, sold: 19, images: [], category: {_id: "i5ghj5fk5", name: "Category 1"} },
        { _id: "i4sg84122fd", name: 'Product 2', price: 200, total: 200, sold: 16, images: [], category: {_id: "o64gro4g4", name: "Category 2"} },
      ],
    };
    useFetch.mockReturnValue([mockProducts, false]);
    render(<Router><BestSellersSection /></Router>);
    expect(screen.getByText('Best Sellers')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });
});