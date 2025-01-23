import PropTypes from 'prop-types'
import { StyledLink, StyledSideNav } from './sidebar.styles'

const Sidebar = ({ heading, elements, onClick = () => null }) => {

  const clickHandler = (title) => (e) => {
    e.preventDefault();
    onClick(title);
  }
  return <StyledSideNav>
    <h3>{heading}</h3>
    {
      elements.map((element, i) => {
        return <StyledLink key={i} to={element.href} onClick={clickHandler(element.title)} data-testid="styled-link">{element.title}</StyledLink>
      })
    }
  </StyledSideNav>
}

Sidebar.propTypes = {
  heading: PropTypes.string.isRequired,
  elements: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    title: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func,
}

export default Sidebar;