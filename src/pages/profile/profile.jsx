import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";

const Profile = () => {
  return <div>
    <Sidebar heading="My Account" elements={["Dashboard", "Orders", "Addresses", "Account Details", "Logout"]} />
    <Outlet />
  </div>;
};

export default Profile;
