import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import Dropdown from '../dropdown/dropdown';
import DropdownMenu from '../dropdown-menu/dropdownMenu';
import MyAccountDropdown from '../my-account-dropdown/myAccountDropdown';

import { StyledMenu, StyledDropdownToggle, StyledCount } from './menu.styles';

//TODO: add dropdown with options for icons
const Menu = () => {
  const [isMyAccountDropdownOpen, setIsMyAccountDropdownOpen] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [isWishlistDropdownOpen, setIsWishlistDropdownOpen] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);

  const openDropdown = (name) => {
    setIsMyAccountDropdownOpen(false);
    setIsCartDropdownOpen(false);
    setIsWishlistDropdownOpen(false);

    if (name === 'my account' && !isMyAccountDropdownOpen) {
      setIsMyAccountDropdownOpen(true);
    }
    if (name === 'cart' && !isCartDropdownOpen) {
      setIsCartDropdownOpen(true);
    }
    if (name === 'wishlist' && !isWishlistDropdownOpen) {
      setIsWishlistDropdownOpen(true);
    }
  };

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
          <StyledCount>{quantity}</StyledCount>
        </StyledDropdownToggle>
        <DropdownMenu></DropdownMenu>
      </Dropdown>
      <Dropdown>
        <StyledDropdownToggle
          isOpen={isMyAccountDropdownOpen}
          onClick={() => openDropdown('my account')}
        >
          <FaRegUser />
        </StyledDropdownToggle>
        {isMyAccountDropdownOpen && (
          <DropdownMenu styles={{ maxHeight: 'unset', right: '0', left: 'unset' }}>
            <MyAccountDropdown closeDropdown={() => setIsMyAccountDropdownOpen(false)} />
          </DropdownMenu>
        )}
      </Dropdown>
    </StyledMenu>
  );
};

export default Menu;
