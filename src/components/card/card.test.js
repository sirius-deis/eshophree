import { render, screen } from "@testing-library/react";
import Card from "./card";


describe("Card component", () => {
  it("should match snapshot", () => {
    const { container } = render(<Card />);
    expect(container).toMatchSnapshot();
  });

  it("should render a name", () => {
    render(<Card name="Test hero" />);
    expect(screen.getByText("Test hero")).toBeInTheDocument();
  });
});