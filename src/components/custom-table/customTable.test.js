import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CustomTable from './customTable';
import { removeProductFromCart } from '../../store/cart/cart.actions';

const mockStore = configureStore([]);

describe('CustomTable Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn();
  });

  const defaultProps = {
    columnsName: ['Name', 'Price', 'Quantity'],
    data: [
      { _id: '1', Name: 'Product 1', Price: '$10', Quantity: 1 },
      { _id: '2', Name: 'Product 2', Price: '$20', Quantity: 2 },
    ],
    wrappers: [null, null, null],
  };

  it('should render the table with correct columns and data', () => {
    render(
      <Provider store={store}>
        <CustomTable {...defaultProps} />
      </Provider>
    );

    defaultProps.columnsName.forEach((column) => {
      expect(screen.getByText(column)).toBeInTheDocument();
    });
    
    defaultProps.data.forEach((item) => {
      expect(screen.getByText(item.Name)).toBeInTheDocument();
      expect(screen.getByText(item.Price)).toBeInTheDocument();
      expect(screen.getByText(item.Quantity.toString())).toBeInTheDocument();
    });
  });

  it('should dispatch removeProductFromCart action when button is clicked', () => {
    render(
      <Provider store={store}>
        <CustomTable {...defaultProps} />
      </Provider>
    );

    const removeButtons = screen.getAllByRole('button');
    fireEvent.click(removeButtons[0]);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(removeProductFromCart('1'));
  });
});