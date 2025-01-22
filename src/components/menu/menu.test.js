import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Menu from './menu';

const mockStore = configureStore([]);

describe('Menu component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      cart: { quantity: 3 },
      wishlist: { products: [1, 2] },
    });
  });
  it('should match snapshot', () => {
    const { container } = render(<Provider store={store}><Menu /></Provider>);
    expect(container).toMatchSnapshot();
  });
  it('should render wishlist and cart quantities correctly', () => {
    render(
      <Provider store={store}>
        <Menu />
      </Provider>
    );

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
