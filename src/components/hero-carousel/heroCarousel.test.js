import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeroCarousel from './heroCarousel';

jest.useFakeTimers();

describe('HeroCarousel component', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <HeroCarousel />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  it('should change slide when next control is clicked', () => {
    const { getByText } = render(<MemoryRouter><HeroCarousel /></MemoryRouter>);
    const nextControl = getByText('›');
    act(() => {
      fireEvent.click(nextControl);
    });
    expect(screen.getAllByAltText("slide")[0].parentElement).not.toHaveClass("active");
    expect(screen.getAllByAltText("slide")[1].parentElement).toHaveClass("active");
  });
  it('should change slide when previous control is clicked', () => {
    const { getByText } = render(<MemoryRouter><HeroCarousel /></MemoryRouter>);
    const prevControl = getByText('‹');
    act(() => {
      fireEvent.click(prevControl);
    });
    expect(screen.getAllByAltText("slide")[3].parentElement).toHaveClass("active");
    expect(screen.getAllByAltText("slide")[0].parentElement).not.toHaveClass("active");
  });
  it('automatically changes slide after interval', () => {
    const { getAllByAltText } = render(<MemoryRouter><HeroCarousel /></MemoryRouter>);
    act(() => {
      jest.advanceTimersByTime(10000);
    });
    expect(getAllByAltText("slide")[1].parentElement).toHaveClass("active");
    expect(getAllByAltText("slide")[0].parentElement).not.toHaveClass("active");
  });
  it('should change slide when indicator is clicked', () => {
    const { container } = render(<MemoryRouter><HeroCarousel /></MemoryRouter>);
    const indicators = container.querySelectorAll('button');
    act(() => {
      fireEvent.click(indicators[1]);
    });
    expect(indicators[1]).toHaveClass('active');
  });
});
