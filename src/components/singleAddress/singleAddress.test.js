import { render, screen } from "@testing-library/react";
import SingleAddress from "./singleAddress";

const address = {
  id: 1,
  name: "John Smith",
  title: "Billing Address",
  address: "123 Main St",
  city: "New York",
  state: "NY",
  zipCode: "10001",
  phone: "123-456-7890",
  email: "john@example.com",
};

describe("SingleAddress component", () => {
  it("should match snapshot", function () {
    const { container } = render(<SingleAddress {...address} />);
    expect(container).toMatchSnapshot();
  });
  it("should render address details", function () {
    render(<SingleAddress {...address} />);
    expect(screen.getByText("John Smith")).toBeInTheDocument();
    expect(screen.getByText("123 Main St")).toBeInTheDocument();
    expect(screen.getByText(/New York/)).toBeInTheDocument();
    expect(screen.getByText(/NY/)).toBeInTheDocument();
    expect(screen.getByText(/10001/)).toBeInTheDocument();
    expect(screen.getByText(/123-456-7890/)).toBeInTheDocument();
    expect(screen.getByText(/john@example\.com/)).toBeInTheDocument();
  })
});