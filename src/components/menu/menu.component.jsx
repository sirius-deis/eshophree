import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import Dropdown from '../dropdown/dropdown.component';
import DropdownMenu from '../dropdown-menu/dropdownMenu.component';

import { StyledMenu, StyledDropdownToggle, StyledCount } from './menu.styles';

const Menu = () => {
    return (
        <StyledMenu>
            <Dropdown>
                <StyledDropdownToggle>
                    <FaRegHeart />
                    <StyledCount>0</StyledCount>
                </StyledDropdownToggle>
            </Dropdown>
            <Dropdown>
                <StyledDropdownToggle>
                    <MdOutlineShoppingCart />
                    <StyledCount>0</StyledCount>
                </StyledDropdownToggle>
            </Dropdown>
            <Dropdown>
                <StyledDropdownToggle>
                    <FaRegUser />
                </StyledDropdownToggle>
            </Dropdown>
        </StyledMenu>
    );
};

export default Menu;
