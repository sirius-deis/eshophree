import { useState } from "react";

const TrackYourOrder = () => {

  const [error, setError] = useState(false)

  const submitHandler = () => {

  }
  return <div>
    <h1>Track Your Order</h1>
    <p>Please enter your order ID to track your order.</p>
    <form>
      <div>
        <input type="text" placeholder="Order ID" name="id" />
        <input type="text" placeholder="Email address" name="email" />
      </div>
      <button type="submit">Track Order</button>
    </form>
  </div>
}

export default TrackYourOrder;