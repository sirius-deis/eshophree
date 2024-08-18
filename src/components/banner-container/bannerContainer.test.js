import {render} from '@testing-library/react'
import BannerContainer from './bannerContainer'

describe('BannerContainer component', () => {
  it('should match snapshot', () => {
    const {container} = render(<BannerContainer />)
    expect(container).toMatchSnapshot()
  })
})