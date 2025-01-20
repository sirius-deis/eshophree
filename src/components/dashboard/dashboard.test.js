import { render, screen } from "@testing-library/react";
import Dashboard from "./dashboard";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([])

describe("Dashboard component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({user: {user: {name: "John"}}})
  })

  it('should match snapshot', () => {
    const { container } = render(<Provider store={store}><Dashboard /></Provider>);
    expect(container).toMatchSnapshot();
  })

  it("should render dashboard component", () => {
    render(<Provider store={store}><Dashboard /></Provider>)
    expect(screen.getByText(/john/i)).toBeInTheDocument()
  })
})