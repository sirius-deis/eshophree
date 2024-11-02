import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";

const elements = [
  { title: "Dashboard", href: 'dashboard' },
  { title: "Orders", href: 'orders' },
  { title: "Addresses", href: 'addresses' },
  { title: "Account Details", href: 'account-details' },
  { title: "Logout", href: '/logout' }
]

const Profile = () => {
  return <div>
    <Sidebar heading="My Account" elements={elements} />
    <Outlet />
  </div>;
};

export default Profile;
