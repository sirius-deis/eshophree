import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ListItem from './listItem';

describe('ListItem component', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <ListItem>test</ListItem>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  it('should render component with correct value', () => {
    render(
      <MemoryRouter>
        <ListItem>test</ListItem>
      </MemoryRouter>,
    );
    const component = screen.queryByText(/test/i);
    expect(component).toBeInTheDocument();
    expect(component.textContent).toBe('test');
  });
  it('should render component which contain - with correct value', () => {
    render(
      <MemoryRouter>
        <ListItem>test-test</ListItem>
      </MemoryRouter>,
    );
    const component = screen.queryByText(/test/i);
    expect(component).toBeInTheDocument();
    expect(component.textContent).toBe('test test');
  });
});
