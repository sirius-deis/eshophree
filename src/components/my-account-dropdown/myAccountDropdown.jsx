import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaRegUser, FaRegAddressCard } from 'react-icons/fa';
import { MdOutlineShoppingCart, MdLogout, MdLogin } from 'react-icons/md';
import { AiOutlineDashboard } from 'react-icons/ai';
import DropdownItem from '../dropdown-item/dropdownItem';

const list = [
  [<AiOutlineDashboard />, 'Dashboard'],
  [<MdOutlineShoppingCart />, 'Orders'],
  [<FaRegHeart />, 'Wishlist'],
  [<FaRegAddressCard />, 'Addresses'],
  [<FaRegUser />, 'Account Details'],
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

export default MyAccountDropdown;
