import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaRegUser, FaRegAddressCard, FaFileInvoice } from 'react-icons/fa';
import { MdOutlineShoppingCart, MdLogout, MdLogin } from 'react-icons/md';
import DropdownItem from '../dropdown-item/dropdownItem';

const list = [
  [<FaRegUser />, 'Account Details'],
  [<MdOutlineShoppingCart />, 'Orders'],
  [<FaRegAddressCard />, 'Addresses'],
  [<FaRegHeart />, 'Wishlist'],
  [<FaFileInvoice />, 'Invoices'],
  [<MdLogout />, 'Logout'],
];

const MyAccountDropdown = ({ closeDropdown }) => {
  const user = useSelector((state) => state.user.user);
  return (
    <div>
      {user ? (
        list.map((item, i) => (
          <DropdownItem key={i}>
            <Link
              to={item[1].replace(/[A-Z\s]/g, (match) => {
                return match === ' ' ? '_' : match.toLowerCase();
              })}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingLeft: '1.5rem',
              }}
            >
              {item[0]} {item[1]}
            </Link>
          </DropdownItem>
        ))
      ) : (
        <DropdownItem onSelectCategoryHandler={closeDropdown}>
          <Link
            to='/login'
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              paddingLeft: '1.5rem',
            }}
          >
            <MdLogin />
            Login
          </Link>
        </DropdownItem>
      )}
    </div>
  );
};

MyAccountDropdown.propTypes = {
  closeDropdown: PropTypes.func,
};

export default MyAccountDropdown;
