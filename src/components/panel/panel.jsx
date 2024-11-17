import PropTypes from 'prop-types'
import { StyledPanel } from './panel.styles'

const Panel = ({ children, withBorder, withShadow, bgColor }) => {
  return <StyledPanel className={`${withBorder ? 'bordered' : ''} ${withShadow ? 'shadowed' : ''}`} bgColor={bgColor}>{children}</StyledPanel>
}

Panel.propTypes = {
  children: PropTypes.node,
  withBorder: PropTypes.bool,
  withShadow: PropTypes.bool,
  bgColor: PropTypes.string,
}

export default Panel;