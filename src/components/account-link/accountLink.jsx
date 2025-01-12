import PropTypes from "prop-types"
import { StyledAccountLink } from './accountLink.styles'

const AccountLink = ({ children }) => {
  return <StyledAccountLink>{children}</StyledAccountLink>
}

AccountLink.propTypes = {
  children: PropTypes.node,
}

export default AccountLink