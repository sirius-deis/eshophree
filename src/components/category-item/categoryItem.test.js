import { render, screen } from "@testing-library/react";
import CategoryItem from "./categoryItem";


describe("CategoryItem component", () => {
  it("should match snapshot", function () {
    const { container } = render(<CategoryItem />);
    expect(container).toMatchSnapshot();
  });
  it("should render a category name", () => {
    render(<CategoryItem>Electronics</CategoryItem>);
    expect(screen.getByText("Electronics")).toBeInTheDocument();
  });
})