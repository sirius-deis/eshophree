import { StyledDropdownItem } from './dropdownItem.styles';

const DropdownItem = ({ onSelectCategoryHandler, value }) => {
  return (
    <StyledDropdownItem type='button' onClick={() => onSelectCategoryHandler(value)}>
      {value}
    </StyledDropdownItem>
  );
};

export default DropdownItem;
