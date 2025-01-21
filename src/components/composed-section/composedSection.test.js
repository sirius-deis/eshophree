import { render, screen } from "@testing-library/react";
import ComposedSection from "./composedSection";

jest.mock('../../hooks/useFetch', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("ComposedSection component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should match snapshot", () => {
    const useFetch = require('../../hooks/useFetch').default;
    const mockProducts = [
      { id: 1, name: "Product 1", price: 100 },
      { id: 2, name: "Product 2", price: 200 },
    ];
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
});