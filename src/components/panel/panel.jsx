import PropTypes from 'prop-types'
import {StyledPanel} from './panel.styles'

const Panel = ({children, withBorder, withShadow}) => {
  return <StyledPanel className={`${withBorder ? 'bordered': ''} ${withShadow ? 'shadowed' : ''}`}>{children}</StyledPanel>
}

Panel.propTypes = {
  children: PropTypes.node,
  withBorder: PropTypes.bool,
  withShadow: PropTypes.bool,
}

export default Panel;