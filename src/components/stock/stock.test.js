import {render, screen} from '@testing-library/react'
import Stock from './stock'

describe('Stock component', () => {
  it('should match snapshot', () => {
    const {container} = render(<Stock total={10} sold={3} endIn={Date.now() + 1000000} />)
    expect(container).toMatchSnapshot()
  })
  it('should render values correctly', () => {
    render(<Stock total={10} sold={3} endIn={Date.now() + 1000000} />)
    expect(screen.getByText('Available: 7')).toBeInTheDocument()
    expect(screen.getByText('Sold: 3')).toBeInTheDocument()
  })
})