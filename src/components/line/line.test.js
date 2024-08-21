import {render, screen} from '@testing-library/react'
import Line from './line'

describe('Line', () => {
  it('should match snapshot', () => {
    const {container} = render(<Line width={100} />)
    expect(container).toMatchSnapshot()
  })
});