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

  it("should render loading state initially", () => {
    const useFetch = require('../../hooks/useFetch').default;
    useFetch.mockReturnValue([null, true]);

    render(<ComposedSection />);
    
    expect(screen.queryByText("Top 20")).not.toBeInTheDocument();
    expect(screen.queryByText("Featured Products")).not.toBeInTheDocument();
  });

  
});