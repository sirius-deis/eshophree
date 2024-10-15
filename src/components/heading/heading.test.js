import { render, screen } from "@testing-library/react";
import Heading from "./heading";

describe(" Heading component", function() {
  it("should match snapshot", function() {
    const { container } = render(<Heading>Hello World</Heading>);
    expect(container).toMatchSnapshot();
  });
  it("should render with different text", function() {
    render(<Heading>Hello Universe</Heading>);
    expect(screen.getByText("Hello Universe")).toBeInTheDocument();
  });
})