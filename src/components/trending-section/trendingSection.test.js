import { render, screen } from "@testing-library/react";
import TrendingSection from "./trendingSection";
import { __esModule } from "@testing-library/jest-dom/dist/matchers";

jest.mock('../card/card.jsx', () => ({
  __esModule: true,
  default: ({ name, price }) => (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  )
}));

jest.mock('../../hooks/useFetch.js', () => (
  {
    __esModule: true,
    default: jest.fn()
  }
));

describe("TrendingSection component", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it("should render loading state initially", () => {
    const useFetch = require('../../hooks/useFetch').default;
    const mockProducts = {
      products: [
        { _id: 1, name: "Product 1", price: 100 },
        { _id: 2, name: "Product 2", price: 200 },
      ]
    }
    useFetch.mockReturnValue([mockProducts, true]);
    render(<TrendingSection />);
    expect(screen.queryByText('Trending Products')).not.toBeInTheDocument();
  });

  it("should render products when data is fetched", () => {
    const useFetch = require('../../hooks/useFetch').default;
    const mockProducts = {
      products: [
        { _id: 1, name: "Product 1", price: 100 },
        { _id: 2, name: "Product 2", price: 200 },
      ]
    }
    useFetch.mockReturnValue([mockProducts, false]);
    render(<TrendingSection />);
    expect(screen.getByText('Trending Products')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  })

});