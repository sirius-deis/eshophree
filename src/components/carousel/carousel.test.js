import { render, screen } from "@testing-library/react";
import Carousel from "./carousel";

const list = [
  <div key={1}>Slide 1</div>,
  <div key={2}>Slide 2</div>
];

describe("Carousel component", () => {
  it("should match snapshot", function () {
    const { container } = render(<Carousel>{list}</Carousel>);
    expect(container).toMatchSnapshot();
  });
  it("should render a carousel", () => {
    render(<Carousel>{list}</Carousel>);
    expect(screen.getByText("Slide 1")).toBeInTheDocument();
  });
  
});