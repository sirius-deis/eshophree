import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Card from "./card";


describe("Card component", () => {
  const defaultValues = {
    _id: "21fd434hd3",
    name: "Hero",
    images: ["test.jpg"],
    category: { _id: "5635geet3gfdgd", name: "Category" },
    price: 100,
    discount: 10,
    total: 10,
    sold: 5,
    endIn: 100000,
  };
  it("should match snapshot", () => {
    const { container } = render(<Router><Card {...defaultValues} /></Router>);
    expect(container).toMatchSnapshot();
  });

  it("should render a name", () => {
    render(<Router><Card {...defaultValues} /></Router>);
    expect(screen.getByText("Hero")).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
  });

  it("should render an image", () => {
    render(<Router><Card {...defaultValues} /></Router>);
    expect(screen.getByRole("img")).toHaveAttribute("src", defaultValues.images[0]);
  });

  it("should render a product link", () => {
    render(<Router><Card {...defaultValues} /></Router>);
    expect(screen.getByText("Hero")).toHaveAttribute("href", `/product/${defaultValues._id}`);
  });
  it("should render a category link", () => {
    render(<Router><Card {...defaultValues} /></Router>);
    expect(screen.getByText("Category")).toHaveAttribute("href", `/category/${defaultValues.category._id}`);
  });
  it('calculates and displays discounted price', () => {
    render(<Router><Card {...defaultValues} /></Router>);
    expect(screen.getByText('$100.00')).toBeInTheDocument();
    expect(screen.getByText('$90.00')).toBeInTheDocument();
  });
});