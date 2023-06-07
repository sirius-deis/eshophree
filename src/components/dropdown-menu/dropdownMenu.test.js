import { render, screen, fireEvent } from '@testing-library/react';

import DropdownMenu from './dropdownMenu';

describe('DropdownMenu component', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <DropdownMenu>
        <button>button #1</button>
        <button>button #2</button>
      </DropdownMenu>,
    );
    expect(container).toMatchSnapshot();
  });
  it('should render content', () => {
    render(
      <DropdownMenu>
        <button>button #1</button>
        <button>button #2</button>
      </DropdownMenu>,
    );
    const content = screen.queryAllByRole('button');
    expect(content[0]).toHaveTextContent('button #1');
    expect(content[1]).toHaveTextContent('button #2');
    expect(content.length).toBe(2);
  });
});
