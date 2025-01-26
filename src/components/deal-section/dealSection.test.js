import { render, screen } from "@testing-library/react";
import DealSection from "./dealSection";

jest.mock("../card/card.jsx", () => ({
  __esModule: true,
  default: ({ name, price }) => (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  )
}))

jest.mock("../../hooks/useFetch", () => ({
  __esModule: true,
  default: jest.fn(),
}));


describe("DealSection component", () => {
  const mockProducts = {
    products: [
      { _id: 1, name: "Product 1", price: 100 },
      { _id: 2, name: "Product 2", price: 200 },
    ]
  };

  beforeEach(() => {
    jest.clearAllMocks()
  });
  it("should match snapshot", () => {
    const useFetch = require("../../hooks/useFetch").default;
    
    useFetch.mockReturnValue([mockProducts, false]);
    const { container } = render(<DealSection />);
    expect(container).toMatchSnapshot();
  });
  it("should render loading state initially", () => {
    const useFetch = require("../../hooks/useFetch").default
    useFetch.mockReturnValue([null, true])

    render(<DealSection/>)
    
    expect(screen.queryByText("Deal Of The Day")).not.toBeInTheDocument()
  })
  it("should render fetched products", () => {
    const useFetch = require("../../hooks/useFetch").default;
    useFetch.mockReturnValue([mockProducts, false]);

    render(<DealSection/>)

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  })
});