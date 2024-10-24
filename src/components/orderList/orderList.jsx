import useFetch from "../../hooks/useFetch"
import Order from "../order/order"
import Spinner from "../spinner/spinner"
import { StyledOrderList } from './orderList.styles'

const OrderList = () => {

  const [data, isLoading, error] = useFetch('/orders')

  if (isLoading) {
    return <Spinner />
  }

  return <StyledOrderList>
    <tr>
      <th>Order</th>
      <th>Date</th>
      <th>Status</th>
      <th>Total</th>
    </tr>
    {data.forEach((order) => {
      return <Order {...order} />
    })}
  </StyledOrderList>
}

export default OrderList;