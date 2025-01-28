import { render, screen, fireEvent } from "@testing-library/react";
import QuantityChanger from "./quantityChanger";

describe("QuantityChanger", () => {
  const mockChangeFn = jest.fn();
  beforeEach(() => {
    mockChangeFn.mockClear();
  })
  it("should match snapshot", () => {
    const { container } = render(<QuantityChanger quantity={4} changeFn={mockChangeFn}/>);
    expect(container).toMatchSnapshot();
  })
  it("should render the quantity and buttons", () => {
    render(<QuantityChanger quantity={4} changeFn={mockChangeFn}/>);
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
  })
  it("should call changeFn with 1 when + button is clicked", () => {
    render(<QuantityChanger quantity={4} changeFn={mockChangeFn}/>);
    fireEvent.click(screen.getByText("+"));
    expect(mockChangeFn).toHaveBeenCalledWith(1);
  })
  it("should call changeFn with -1 when - button is clicked", () => {
    render(<QuantityChanger quantity={4} changeFn={mockChangeFn}/>);
    fireEvent.click(screen.getByText("-"));
    expect(mockChangeFn).toHaveBeenCalledWith(-1);
  })
  it('renders with different quantities', () => {
    const {rerender} = render(<QuantityChanger quantity={4} changeFn={mockChangeFn} />);
    expect(screen.getByText("4")).toBeInTheDocument();

    rerender(<QuantityChanger quantity={7} changeFn={mockChangeFn} />);
    expect(screen.getByText("7")).toBeInTheDocument();
  })
})