import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import MyAccountDropdown from './myAccountDropdown';

const mockStore = configureStore([]);

describe('MyAccountDropdown Component', () => {
  let store;
  let closeDropdownMock;

  beforeEach(() => {
    closeDropdownMock = jest.fn();
  });

  it('should render account options when user is logged in', () => {
    store = mockStore({
      user: { user: { name: 'Test User' } },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <MyAccountDropdown closeDropdown={closeDropdownMock} />
        </Router>
      </Provider>
    );

    expect(getByText('Account Details')).toBeInTheDocument();
    expect(getByText('Orders')).toBeInTheDocument();
    expect(getByText('Addresses')).toBeInTheDocument();
    expect(getByText('Wishlist')).toBeInTheDocument();
    expect(getByText('Invoices')).toBeInTheDocument();
    expect(getByText('Logout')).toBeInTheDocument();
  });

  it('should render login option when user is not logged in', () => {
    store = mockStore({
      user: { user: null },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <MyAccountDropdown closeDropdown={closeDropdownMock} />
        </Router>
      </Provider>
    );

    expect(getByText('Login')).toBeInTheDocument();
  });

  it('should call closeDropdown when login option is clicked', () => {
    store = mockStore({
      user: { user: null },
    });

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <MyAccountDropdown closeDropdown={closeDropdownMock} />
        </Router>
      </Provider>
    );

    fireEvent.click(getByText('Login'));
    expect(closeDropdownMock).toHaveBeenCalled();
  });
});