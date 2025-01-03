import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from './accordion';

describe('Accordion component', () => {
  const title = 'Accordion Title';
  const content = 'Accordion Content';
  it('should match snapshot with kind round', () => {
    const { container } = render(<Accordion content={content} title={title}/>);
    expect(container).toMatchSnapshot();
  });
  it('should render the title correctly', () => {
    render(<Accordion title={title} content={content} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should not display content initially', () => {
    render(<Accordion title={title} content={content} />);
    expect(screen.queryByText(content)).not.toBeInTheDocument();
  });

  it('should toggle content visibility when button is clicked', () => {
    render(<Accordion title={title} content={content} />);
    const button = screen.getByRole('button', { name: /accordion title/i });

    fireEvent.click(button);
    expect(screen.getByText(content)).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.queryByText(content)).not.toBeInTheDocument();
  });

  it('should display the correct icon based on the state', () => {
    render(<Accordion title={title} content={content} />);
    const button = screen.getByRole('button', { name: /accordion title/i });

    expect(screen.getByText('+')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText('−')).toBeInTheDocument();
  });
});