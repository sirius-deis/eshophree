import { render } from '@testing-library/react';
import Column from './column';

describe('Column Component', () => {
  it("should match snapshot", () => {
    const { container } = render(<Column />);
    expect(container).toMatchSnapshot();
  })
  it('should render children correctly', () => {
    const { getByText } = render(
      <Column>
        <div>Test Child</div>
      </Column>
    );

    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('should apply the correct styles', () => {
    const { container } = render(
      <Column>
        <div>Styled Child</div>
      </Column>
    );

    const columnElement = container.firstChild;
    expect(columnElement).toHaveStyle('display: flex');
    expect(columnElement).toHaveStyle('flex-direction: column');
  });
});