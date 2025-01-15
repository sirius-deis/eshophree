import { render, screen, fireEvent, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './login';

import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        user: {
          email: 'test@test.com',
        },
      }),
  }),
);

describe('Login component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({user: {isLoading: false, error: null}});
    store.dispatch = jest.fn();
  });
  it('should match snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
  it('should fire submit event', async () => {
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>,
    );
    const emailInput = screen.getByLabelText('Email *');
    fireEvent.change(emailInput, {
      target: {
        value: 'test@test.com',
      },
    });
    const passwordInput = screen.getByLabelText('Password *');
    fireEvent.change(passwordInput, {
      target: {
        value: 'password',
      },
    });
    const form = screen.getByRole('form', { hidden: true });
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      fireEvent.submit(form);
    });
    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');
  });
});
