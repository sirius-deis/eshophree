import { render, screen } from "@testing-library/react";
import ComposedSection from "./composedSection";

jest.mock('../card/card.jsx', () => ({
  __esModule: true,
  default: ({name, price}) => (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  )
}))

jest.mock('../../hooks/useFetch', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("ComposedSection component", () => {
  const mockProducts = {
    products: [
      { _id: 1, name: "Product 1", price: 100 },
      { _id: 2, name: "Product 2", price: 200 },
    ]
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should match snapshot", () => {
    const useFetch = require('../../hooks/useFetch').default;
    
    useFetch.mockReturnValue([mockProducts, false]);

    const { container } = render(<ComposedSection />);
    expect(container).toMatchSnapshot();
  })

  it("should render loading state initially", () => {
    const useFetch = require('../../hooks/useFetch').default;
    useFetch.mockReturnValue([null, true]);

    render(<ComposedSection />);
    
    expect(screen.queryByText("Top 20")).not.toBeInTheDocument();
    expect(screen.queryByText("Featured Products")).not.toBeInTheDocument();
  });
  it("should render products", () => {
    const useFetch = require("../../hooks/useFetch").default;
    useFetch.mockReturnValue([mockProducts, false])

    render(<ComposedSection />);
    expect(screen.getAllByText(/product 1/i)).not.toBeNull()
    expect(screen.getAllByText(/100/i)).not.toBeNull()
  })
});