import { render, screen } from "@testing-library/react";
import SmartHomeSection from "./smartHomeSection";
import { __esModule } from "@testing-library/jest-dom/dist/matchers";

jest.mock('../../hooks/useFetch.js', () => ({
  __esModule: true,
  default: jest.fn()
}))

describe("SmartHomeSection component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })
  it("should match snapshot", () => {
    const useFetch = require('../../hooks/useFetch').default;
    const mockProducts = [
      { id: 1, name: "Product 1", price: 100 },
      { id: 2, name: "Product 2", price: 200 },
    ];
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
});