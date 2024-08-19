import { render, screen } from "@testing-library/react";
import Card from "./card";

const defaultValues = {
  _id: "test",
  name: "Hero",
  images: ["test.jpg"],
  categoryId: { _id: "test", name: "Category" },
  price: 100,
  total: 10,
  sold: 5,
  endIn: 100000,
};


describe("Card component", () => {
  it("should match snapshot", () => {
    const { container } = render(<Card {...defaultValues} />);
    expect(container).toMatchSnapshot();
  });

  it("should render a name", () => {
    render(<Card {...defaultValues} />);
    expect(screen.getByText("Hero")).toBeInTheDocument();
  });

  it("should render an image", () => {
    render(<Card {...defaultValues} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "test.jpg");
  });

  it("should render a product link", () => {
    render(<Card {...defaultValues} />);
    expect(screen.getByText("Hero")).toHaveAttribute("href", "test");
  });
  it("should render a category link", () => {
    render(<Card {...defaultValues}  />);
    expect(screen.getByText("Category")).toHaveAttribute("href", "test");
  });
});