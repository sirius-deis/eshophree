import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import HeroCard from './heroCard';

describe('Card component', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <HeroCard btnTitle='Card' />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  it('should render element with given title', () => {
    render(
      <MemoryRouter>
        <HeroCard btnTitle='Card' />
      </MemoryRouter>,
    );
    const title = screen.queryByText(/Card/);
    expect(title).toBeInTheDocument();
  });
});
