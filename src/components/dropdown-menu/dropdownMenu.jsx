import PropTypes from 'prop-types';

import { StyledDropdownMenu } from './dropdownMenu.styles';

const DropdownMenu = ({ children, styles }) => {
  return (
    <StyledDropdownMenu style={styles} role='listbox'>
      {children}
    </StyledDropdownMenu>
  );
};

DropdownMenu.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object,
};

export default DropdownMenu;
