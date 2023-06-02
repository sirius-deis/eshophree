import PropTypes from 'prop-types';

import { StyledDropdownItem } from './dropdownItem.styles';

const DropdownItem = ({ onSelectCategoryHandler, value }) => {
  return (
    <StyledDropdownItem type='button' onClick={() => onSelectCategoryHandler(value)}>
      {value}
    </StyledDropdownItem>
  );
};

DropdownItem.propTypes = {
  onSelectCategoryHandler: PropTypes.func,
  value: PropTypes.string,
};

export default DropdownItem;
