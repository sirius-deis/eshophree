import { render, screen } from "@testing-library/react";
import Panel from "./panel";

describe("Panel component", () => {
  it("should match snapshot", () => {
    const { container } = render(<Panel />);
    expect(container).toMatchSnapshot();
  });
  it("should apply bordered style", () => {
    const { container } = render(<Panel withBorder />);
    expect(container.querySelector(".bordered")).toBeTruthy();
  });
  it("should apply shadowed style", () => {
    const { container } = render(<Panel withShadow />);
    expect(container.querySelector(".shadowed")).toBeTruthy();
  });
  it("should render children", () => {
    render(<Panel>Test</Panel>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
})