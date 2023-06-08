import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './navigation';

describe('Navigation component', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
