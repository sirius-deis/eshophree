import { FaRegHeart, FaRegUser, FaRegAddressCard } from 'react-icons/fa';
import { MdOutlineShoppingCart, MdLogout } from 'react-icons/md';
import { AiOutlineDashboard } from 'react-icons/ai';

const list = [
  [<AiOutlineDashboard />, 'Dashboard'],
  [<MdOutlineShoppingCart />, 'Orders'],
  [<FaRegHeart />, 'Wishlist'],
  [<FaRegAddressCard />, 'Addresses'],
  [<FaRegUser />, 'Account Details'],
  [<MdLogout />, 'Logout'],
];

const MyAccountDropdown = () => {
  return <div>//</div>;
};

export default MyAccountDropdown;
