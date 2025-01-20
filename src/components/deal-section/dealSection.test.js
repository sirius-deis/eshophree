import { render, screen } from "@testing-library/react";
import DealSection from "./dealSection";

jest.mock("../../hooks/useFetch", () => ({
  __esModule: true,
  default: jest.fn(),
}));


describe("DealSection component", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  });
  it("should match snapshot", () => {
    const { container } = render(<DealSection />);
    expect(container).toMatchSnapshot();
  });
  it("should render loading state initially", () => {
    const useFetch = require("../../hooks/useFetch").default
    useFetch.mockReturnValue([null, true])

    render(<DealSection/>)
    
    expect(screen.queryByText("Deal Of The Day")).not.toBeInTheDocument()
  })
});