import { render, screen } from "@testing-library/react";
import AccountLink from "./accountLink";


describe("AccountLink component", () => {
  it("should match snapshot", function () {
    const { container } = render(<AccountLink />);
    expect(container).toMatchSnapshot();
  });
  it("should render children", () => {
    render(<AccountLink>My Account</AccountLink>);
    expect(screen.getByText("My Account")).toBeInTheDocument();
  });
})