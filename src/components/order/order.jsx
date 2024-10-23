import { Link } from "react-router-dom"
import { FaEye } from "react-icons/fa";
import Button from "../button/button"

const Order = ({orderId, date, status, total, amount}) => {
  return <div>
    <h3>Order ID: {orderId}</h3>
    <p>Date: {date}</p>
    <p>Status: {status}</p>
    <p>Total: ${total}</p>
    <p>Amount Paid: ${amount}</p>
    <Link to={`orders/${orderId}`}>
      <Button>
        View
        <FaEye/>
      </Button>
    </Link>
  </div>
}

export default Order;