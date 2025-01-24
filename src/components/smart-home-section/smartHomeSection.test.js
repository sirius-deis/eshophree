import { render, screen } from "@testing-library/react";
import SmartHomeSection from "./smartHomeSection";
import { __esModule } from "@testing-library/jest-dom/dist/matchers";

jest.mock('../card/card.jsx', () => ({
  __esModule: true,
  default: ({name, price}) => (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  )
}))

jest.mock('../../hooks/useFetch.js', () => ({
  __esModule: true,
  default: jest.fn()
}))

describe("SmartHomeSection component", () => {
  const mockProducts = {
    products: [
      { _id: 1, name: "Product 1", price: 100 },
      { _id: 2, name: "Product 2", price: 200 },
    ]
  };
  beforeEach(() => {
    jest.clearAllMocks();
  })
  it("should match snapshot", () => {
    const useFetch = require('../../hooks/useFetch').default;
    useFetch.mockReturnValue([mockProducts, false]);
    const {container} = render(<SmartHomeSection />);
    expect(container).toMatchSnapshot();
  });
  it("should render loading state initially", () => {
    const useFetch = require('../../hooks/useFetch').default;
    useFetch.mockReturnValue([null, true]);

    render(<SmartHomeSection />);
    
    expect(screen.queryByText("Smart Home Appliances")).not.toBeInTheDocument();
  });
  it("should render products", () => {
    const useFetch = require('../../hooks/useFetch').default;
    useFetch.mockReturnValue([mockProducts, false]);

    render(<SmartHomeSection />);

    mockProducts.products.forEach(product => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(product.price)).toBeInTheDocument();
    })
  });
});