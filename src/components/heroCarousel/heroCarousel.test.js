import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeroCarousel from './heroCarousel';

describe('HeroCarousel component', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <HeroCarousel />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
