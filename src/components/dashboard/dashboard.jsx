import { useSelector } from "react-redux";

const DashBoard = () => {
  const { user } = useSelector((state) => state.user);
  return <div>
    <h2>Hello, {user.name}</h2>
    <p>From your account dashBoard you can view your recent orders, manage your shipping and billing addresses and edit your password and account details</p>
  </div>
}

export default DashBoard;