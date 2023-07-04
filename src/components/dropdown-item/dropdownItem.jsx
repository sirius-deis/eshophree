import PropTypes from 'prop-types';

import { StyledDropdownItem } from './dropdownItem.styles';

const DropdownItem = ({ children, onSelectCategoryHandler = () => {}, value }) => {
  return (
    <StyledDropdownItem
      role='listitem'
      type='button'
      onClick={() => onSelectCategoryHandler(value)}
    >
      {children}
    </StyledDropdownItem>
  );
};

DropdownItem.propTypes = {
  onSelectCategoryHandler: PropTypes.func,
  value: PropTypes.string,
};

export default DropdownItem;
