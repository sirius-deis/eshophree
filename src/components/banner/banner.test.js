import {render} from '@testing-library/react'
import Banner from './banner'

describe('Banner component', () => {
  it('should match snapshot', () => {
    const {container} = render(<Banner />)
    expect(container).toMatchSnapshot()
  })
})