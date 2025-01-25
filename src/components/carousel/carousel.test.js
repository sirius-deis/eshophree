import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "./carousel";

const list = [
  <div key={1}>Slide 1</div>,
  <div key={2}>Slide 2</div>,
  <div key={3}>Slide 3</div>
];

describe("Carousel component", () => {
  it("should match snapshot", function () {
    const { container } = render(<Carousel>{list}</Carousel>);
    expect(container).toMatchSnapshot();
  });
  it("should render a carousel", () => {
    render(<Carousel>{list}</Carousel>);
    expect(screen.getByText("Slide 1")).toBeInTheDocument();
    expect(screen.getByText("Slide 2")).toBeInTheDocument();
    expect(screen.getByText("Slide 3")).toBeInTheDocument();
  })
  it("should navigate to the next slide", () => {
    render(<Carousel>{list}</Carousel>);
    const nextButton = screen.getByRole("button", { name: /›/i });
    fireEvent.click(nextButton);
    expect(screen.getByText("Slide 2").parentElement).toHaveClass("active");
    expect(screen.getByText("Slide 1").parentElement).not.toHaveClass("active");
  });
  it("should navigate to the previous slide on previous button click", () => {
    render(<Carousel>{list}</Carousel>);
    const nextButton = screen.getByRole('button', { name: /›/i });
    const prevButton = screen.getByRole('button', { name: /‹/i });
    fireEvent.click(nextButton);

    expect(screen.getByText("Slide 2").parentElement).toHaveClass("active");

    fireEvent.click(prevButton);
    expect(screen.getByText("Slide 1").parentElement).toHaveClass("active");
    expect(screen.getByText("Slide 2").parentElement).not.toHaveClass("active");
  });
});