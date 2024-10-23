import { render, screen } from "@testing-library/react";
import Order from "./order";


describe("Order component", () => {
  it("should match snapshot", function () {
    const { container } = render(<Order orderId={1} date={new Date("2024-01-03")} amount={2} status="Some status" total={1023} />);
    expect(container).toMatchSnapshot();
  });
  it("should render order items", function () {
    render(<Order orderId={1} date={new Date("2024-01-03")} amount={2} status="Some status" total={1023}/>);
    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  })
});