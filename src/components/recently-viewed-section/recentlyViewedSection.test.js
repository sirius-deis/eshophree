import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RecentlyViewedSection from './recentlyViewedSection';

jest.mock('../carousel/carousel', () => ({ children, title }) => (
  <div data-testid="mock-carousel" title={title}>
    {children}
  </div>
));
jest.mock('../card/card', () => (props) => (
  <div data-testid="mock-card">
    {JSON.stringify(props)}
  </div>
));

const mockStore = configureStore([]);

describe('RecentlyViewedSection', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      user: {
        recentlyViewed: [
          { _id: 1, name: 'Item 1' },
          { _id: 2, name: 'Item 2' },
          { _id: 3, name: 'Item 3' },
        ],
      },
    });
  });

  it('should render without crashing', () => {
    render(
      <Provider store={store}>
        <RecentlyViewedSection />
      </Provider>
    );
    expect(screen.getByTestId('mock-carousel')).toBeInTheDocument();
  });

  it('should render the correct title in Carousel', () => {
    render(
      <Provider store={store}>
        <RecentlyViewedSection />
      </Provider>
    );
    expect(screen.getByTestId('mock-carousel')).toHaveAttribute('title', 'Recently Viewed');
  });

  it('should render the correct number of Card components', () => {
    render(
      <Provider store={store}>
        <RecentlyViewedSection />
      </Provider>
    );
    expect(screen.getAllByTestId('mock-card')).toHaveLength(3);
  });

  it('should pass the correct props to Card components', () => {
    render(
      <Provider store={store}>
        <RecentlyViewedSection />
      </Provider>
    );
    const cards = screen.getAllByTestId('mock-card');
    expect(cards[0]).toHaveTextContent('"_id":1,"name":"Item 1","isColumn":true');
    expect(cards[1]).toHaveTextContent('"_id":2,"name":"Item 2","isColumn":true');
    expect(cards[2]).toHaveTextContent('"_id":3,"name":"Item 3","isColumn":true');
  });

  it('should render empty Carousel when recentlyViewed is empty', () => {
    store = mockStore({
      user: {
        recentlyViewed: [],
      },
    });
    render(
      <Provider store={store}>
        <RecentlyViewedSection />
      </Provider>
    );
    expect(screen.getByTestId('mock-carousel')).toBeInTheDocument();
    expect(screen.queryAllByTestId('mock-card')).toHaveLength(0);
  });
});