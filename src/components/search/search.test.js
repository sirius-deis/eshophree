import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Search from './search';

describe('Search component', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
  it('should fire click event and show dropdown', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    fireEvent.click(screen.queryAllByRole('button')[0]);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });
  it('should fire mouse events and show dropdown', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>,
    );
    fireEvent.mouseEnter(screen.queryAllByRole('button')[0]);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    fireEvent.mouseLeave(screen.queryAllByRole('button')[0]);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });
});
