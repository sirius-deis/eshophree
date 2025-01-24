import {render, screen, act} from '@testing-library/react'
import Stock from './stock'

describe('Stock component', () => {
  it('should render available and sold stock correctly', () => {
    render(<Stock total={10} sold={3} endIn={Date.now() + 1000000} />)
    expect(screen.getByText('Available: 7')).toBeInTheDocument()
    expect(screen.getByText('Sold: 3')).toBeInTheDocument()
  })
  it('should render progress bar correctly', () => {
    render(<Stock total={100} sold={30} endIn={Date.now() + 10000} />);
    
    const progressBars = screen.getAllByRole('progressbar');
    expect(progressBars.length).toBe(2);
    expect(progressBars[0]).toHaveStyle('width: 100%');
    expect(progressBars[1]).toHaveStyle('width: 70%');
  });

  it('should render countdown timer correctly', () => {
    render(<Stock total={100} sold={30} endIn={Date.now() + 10000} />);
    
    expect(screen.getByText('Days')).toBeInTheDocument();
    expect(screen.getByText('Hours')).toBeInTheDocument();
    expect(screen.getByText('Mins')).toBeInTheDocument();
    expect(screen.getByText('Secs')).toBeInTheDocument();
  });

  it('should handle countdown reaching zero', () => {
    jest.useFakeTimers();
    render(<Stock total={100} sold={30} endIn={Date.now() + 1000} />);
    
    act(() => {
      jest.advanceTimersByTime(2000);
    })
    
    expect(screen.getAllByText("00")).toHaveLength(3);
    jest.useRealTimers();
  });
})