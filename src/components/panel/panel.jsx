import PropTypes from 'prop-types'
import {StyledPanel} from './panel.styles'

const Panel = ({children}) => {
  return <StyledPanel>{children}</StyledPanel>
}

Panel.propTypes = {
  children: PropTypes.node,
}

export default Panel;