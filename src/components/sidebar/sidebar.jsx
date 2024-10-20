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

export default Sidebar;