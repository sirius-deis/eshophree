import { render } from '@testing-library/react';
import Menu from './menu';

describe('Menu component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Menu />);
    expect(container).toMatchSnapshot();
  });
});
