import PropTypes from 'prop-types'
import {StyledLink, StyledSideNav} from './sidebar.styles'

const Sidebar = ({heading, elements}) => {
  return <StyledSideNav>
    <h3>{heading}</h3>
    {
      elements.forEach((element) => {
        return <StyledLink href={element.href}>: {element.title}</StyledLink>
      })
    }
  </StyledSideNav>
}

Sidebar.propTypes = {
  heading: PropTypes.string.isRequired,
  elements: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
}

export default Sidebar;