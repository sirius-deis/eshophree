import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa";
import Button from "../button/button"
import { StyledColumn, StyledOrder } from './order.styles'

const Order = ({ orderId, date, status, total, amount }) => {
  return <StyledOrder>
    <StyledColumn>{orderId}</StyledColumn>
    <StyledColumn>{date}</StyledColumn>
    <StyledColumn>{status}</StyledColumn>
    <StyledColumn>{total}$</StyledColumn>
    <StyledColumn>{amount}</StyledColumn>
    <StyledColumn>
      <Link to={`orders/${orderId}`}>
        <Button>
          View
          <FaEye />
        </Button>
      </Link>
    </StyledColumn>
  </StyledOrder>
}

Order.propTypes = {
  orderId: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
}

export default Order;