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

  it("should render a image", () => {
    render(<Card images={["test.jpg"]} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "test.jpg");
  });

  it("should render a description", () => {
    render(<Card categoryId={{_id: '/id', name: 'some name'}} />);
    expect(screen.getByText("some name")).toBeInTheDocument();
  });
});