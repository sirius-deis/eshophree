import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Hero from './hero';

describe('Hero component', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
