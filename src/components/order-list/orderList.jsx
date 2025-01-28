import useFetch from "../../hooks/useFetch"
import Order from "../order/order"
import Spinner from "../spinner/spinner"
import { StyledOrderList } from './orderList.styles'

const OrderList = () => {

  const [data, isLoading, error] = useFetch('/orders')

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <div>Error</div>
  }

  return <StyledOrderList>
    <thead>
      <tr>
        <th>Order</th>
        <th>Date</th>
        <th>Status</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {data?.orders.forEach((order) => {
        return <Order {...order} />
      })}
    </tbody>
  </StyledOrderList>
}

export default OrderList;