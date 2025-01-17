import { render, screen } from '@testing-library/react';
import Addresses from './addresses';

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe('Address component', () => {
  let store;
  //id, title, name, address, city, state, zipCode, phone, email
  const address = {
        id: 1,
        title: 'Billing Address',
        name: 'John Doe',
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zipCode: '12345',
        phone: '123-456-7890',
        email: 'john.doe@example.com'
      };

  beforeEach(() => {
    store = mockStore({user: {isLoading: false, error: null, addresses: [address]}});
    store.dispatch = jest.fn();
  });
  it('should match snapshot', () => {
    const { container } = render(<Provider store={store}><Addresses /></Provider>);
    expect(container).toMatchSnapshot();
  });
  it('should render the address component with default props', () => {
    render(<Provider store={store}><Addresses /></Provider>);
    expect(screen.getByText(address.title)).toBeInTheDocument();
    expect(screen.getByText(address.name)).toBeInTheDocument();
    expect(screen.getByText(address.street)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(address.city))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(address.state))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(address.zipCode))).toBeInTheDocument();
    expect(screen.getByText(address.phone)).toBeInTheDocument();
    expect(screen.getByText(address.email)).toBeInTheDocument();
  });

  it('should handle missing address gracefully', () => {
    render(<Provider store={mockStore({user: {isLoading: false, error: null, addresses: []}})}><Addresses /></Provider>);
    expect(screen.getByText(/no address available/i)).toBeInTheDocument();
  });
});