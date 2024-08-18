import { render } from '@testing-library/react';
import Row from './row';

describe('Row component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Row />);
    expect(container).toMatchSnapshot();
  });
})