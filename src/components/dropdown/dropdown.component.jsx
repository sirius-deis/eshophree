import PropTypes from 'prop-types';

import { StyledDropdown } from './dropdown.styles';

const Dropdown = ({ children, onMouseLeaveHandler }) => {
  return <StyledDropdown onMouseLeave={onMouseLeaveHandler}>{children}</StyledDropdown>;
};

Dropdown.propTypes = {
  children: PropTypes.node,
  onMouseLeaveHandler: PropTypes.func,
};

export default Dropdown;
