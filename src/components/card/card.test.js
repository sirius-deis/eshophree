import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Card from './card';

describe('Card component', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Card btnTitle='Card' />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  it('should render element with given title', () => {
    render(
      <MemoryRouter>
        <Card btnTitle='Card' />
      </MemoryRouter>,
    );
    const title = screen.queryByText(/Card/);
    expect(title).toBeInTheDocument();
  });
});
