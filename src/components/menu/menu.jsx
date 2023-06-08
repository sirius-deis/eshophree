import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import Dropdown from '../dropdown/dropdown';
import DropdownMenu from '../dropdown-menu/dropdownMenu';

import { StyledMenu, StyledDropdownToggle, StyledCount } from './menu.styles';

//TODO: add dropdown with options for icons
const Menu = () => {
  return (
    <StyledMenu>
      <Dropdown>
        <StyledDropdownToggle>
          <FaRegHeart />
          <StyledCount>0</StyledCount>
        </StyledDropdownToggle>
        <DropdownMenu></DropdownMenu>
      </Dropdown>
      <Dropdown>
        <StyledDropdownToggle>
          <MdOutlineShoppingCart />
          <StyledCount>0</StyledCount>
        </StyledDropdownToggle>
        <DropdownMenu></DropdownMenu>
      </Dropdown>
      <Dropdown>
        <StyledDropdownToggle>
          <FaRegUser />
        </StyledDropdownToggle>
        <DropdownMenu></DropdownMenu>
      </Dropdown>
    </StyledMenu>
  );
};

export default Menu;
