import { render } from '@testing-library/react';
import Row from './row';

describe('Row component', () => {
  it('should match snapshot', () => {
    const { container } = render(<Row />);
    expect(container).toMatchSnapshot();
  });

  it('should render children correctly', () => {
    const { getByText } = render(
      <Row>
        <div>Test Child</div>
      </Row>
    );

    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('should apply the correct styles', () => {
    const { container } = render(
      <Row>
        <div>Styled Child</div>
      </Row>
    );

    const rowElement = container.firstChild;
    expect(rowElement).toHaveStyle('display: flex');
    expect(rowElement).toHaveStyle('flex-direction: row');
  });
})