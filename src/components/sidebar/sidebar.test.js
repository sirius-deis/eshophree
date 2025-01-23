import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "./sidebar";

// jest.mock('./sidebar.styles', () => ({
//   StyledLink: ({ children, ...props }) => <a data-testid="styled-link" {...props}>{children}</a>,
//   StyledSideNav: ({ children }) => <nav data-testid="styled-sidenav">{children}</nav>,
// }));

describe("Sidebar component", () => {
  const mockElements = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ]
  const title = "Some title"

  it("should match snapshot", () => {
    const { container } = render(<MemoryRouter><Sidebar elements={mockElements} heading={title}/></MemoryRouter>);
    expect(container).toMatchSnapshot();
  });
  it("should render the correct heading", () => {
    render(<MemoryRouter><Sidebar elements={mockElements} heading={title}/></MemoryRouter>);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
  it('should render the correct number of links', () => {
    render(<MemoryRouter><Sidebar elements={mockElements} heading={title}/></MemoryRouter>);
    const links = screen.getAllByTestId('styled-link');
    expect(links).toHaveLength(mockElements.length);
  });
  it('should render links with correct href and title', () => {
    render(<MemoryRouter><Sidebar elements={mockElements} heading={title}/></MemoryRouter>);
    mockElements.forEach(element => {
      const link = screen.getByText(element.title);
      expect(link).toHaveAttribute('href', element.href);
    });
  });
  it('should call onClick with correct title when a link is clicked', () => {
    const mockOnClick = jest.fn();
    render(<MemoryRouter><Sidebar elements={mockElements} heading={title} onClick={mockOnClick}/></MemoryRouter>);
    
    const links = screen.getAllByTestId('styled-link');
    fireEvent.click(links[1]);

    expect(mockOnClick).toHaveBeenCalledWith(mockElements[1].title);;
  });
});