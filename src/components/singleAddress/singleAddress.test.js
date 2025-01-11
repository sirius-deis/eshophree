import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SingleAddress from "./singleAddress";

const mockStore = configureStore([]);

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
  let store;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
  });
  it("should match snapshot", () => {
    const { container } = render(<Provider store={store}>
      <SingleAddress {...address} />
    </Provider>);
    expect(container).toMatchSnapshot();
  });
  it("should render address details", () => {
    render(<Provider store={store}>
      <SingleAddress {...address} />
    </Provider>);
    expect(screen.getByText("John Smith")).toBeInTheDocument();
    expect(screen.getByText("123 Main St")).toBeInTheDocument();
    expect(screen.getByText(/New York/)).toBeInTheDocument();
    expect(screen.getByText(/NY/)).toBeInTheDocument();
    expect(screen.getByText(/10001/)).toBeInTheDocument();
    expect(screen.getByText(/123-456-7890/)).toBeInTheDocument();
    expect(screen.getByText(/john@example\.com/)).toBeInTheDocument();
  })
  it("should show edit form when Edit button is clicked", () => {
    render(<Provider store={store}>
      <SingleAddress {...address} />
    </Provider>);
    fireEvent.click(screen.getByText("Edit"));
    expect(screen.getByPlaceholderText("Street Address")).toHaveValue("123 Main St");
    expect(screen.getByPlaceholderText("City")).toHaveValue("New York");
    expect(screen.getByPlaceholderText("State")).toHaveValue("NY");
    expect(screen.getByPlaceholderText("Zip Code")).toHaveValue("10001");
    expect(screen.getByPlaceholderText("Phone Number")).toHaveValue("123-456-7890");
    expect(screen.getByPlaceholderText("Email Address")).toHaveValue("john@example.com");
  })
  it("should update form fields when edited", () => {
    render(<Provider store={store}>
      <SingleAddress {...address} />
    </Provider>);
    fireEvent.click(screen.getByText("Edit"));
    const addressInput = screen.getByPlaceholderText("Street Address")
    fireEvent.change(addressInput, {target: {value: "456 Main St"}})
    expect(addressInput).toHaveValue("456 Main St")
  })
  it('should cancel editing when Cancel button is clicked', () => {
    render(<Provider store={store}>
      <SingleAddress {...address} />
    </Provider>);
    fireEvent.click(screen.getByText("Edit"));
    const addressInput = screen.getByPlaceholderText("Street Address")
    fireEvent.change(addressInput, {target: {value: "456 Main St"}})
    fireEvent.click(screen.getByText("Cancel"));
    expect(screen.getByText("123 Main St")).toBeInTheDocument();
    expect(screen.queryByPlaceholderText("Street Address")).not.toBeInTheDocument()
  })
});