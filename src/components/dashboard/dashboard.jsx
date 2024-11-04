import { useSelector } from "react-redux";
import { StyledDashboard, StyledName } from './dashboard.styles'

const DashBoard = () => {
  const { user } = useSelector((state) => state.user);
  return <StyledDashboard>
    <h2>Hello, <StyledName>{user.name}</StyledName></h2>
    <p>From your account dashBoard you can view your recent orders, manage your shipping and billing addresses and edit your password and account details</p>
  </StyledDashboard>
}

export default DashBoard;