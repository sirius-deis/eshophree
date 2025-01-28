import { render, screen, act } from "@testing-library/react";
import OrderList from "./orderList";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        orders: [
          { orderId: 1, date: new Date('2024-02-10'), status: "status 1", total: 25, amount: 1 },
          { orderId: 2, date: new Date('2024-02-13'), status: "status 2", total: 32, amount: 3 }],
      }),
  }),
);


describe("OrderList component", () => {
  it("should match snapshot", async function () {
    const { container } = render(<OrderList />);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });
    expect(container).toMatchSnapshot()
  });
  it("should render the order list correctly", async function () {
    render(<OrderList />);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    });
    const orderItems = screen.getAllByText(/status/i);
    expect(orderItems.length).toBe(2)
  });
});