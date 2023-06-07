import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { MemoryRouter } from 'react-router-dom';

import Header from './header';

describe('Header component', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
        ,
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
