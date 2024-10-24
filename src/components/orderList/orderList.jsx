import useFetch from "../../hooks/useFetch"
import Order from "../order/order"
import Spinner from "../spinner/spinner"

const OrderList = () => {

  const [data, isLoading, error] = useFetch('/orders')

  if (isLoading) {
    return <Spinner />
  }

  return <table>
    <tr>
      <th>Order</th>
      <th>Date</th>
      <th>Status</th>
      <th>Total</th>
    </tr>
    {data.forEach((order) => {
      return <Order {...order} />
    })}
  </table>
}

export default OrderList;