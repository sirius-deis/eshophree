import { render, screen } from "@testing-library/react";
import Sidebar from "./sidebar";

const title = "Some title"

const elements = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
]


describe("Sidebar component", () => {
  it("should match snapshot", () => {
    const { container } = render(<Sidebar elements={elements} heading={title}/>);
    expect(container).toMatchSnapshot();
  });
  it("should render heading", () => {
    render(<Sidebar elements={elements} heading={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});