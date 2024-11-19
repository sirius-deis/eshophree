import { useState } from "react";
import InfoBox from "../../components/infoBox/infoBox";
import fetchData from "../../utils/fetchData";

const TrackYourOrder = () => {
  const [error, setError] = useState(null)

  const [isError, setIsError] = useState(false)

  const submitHandler = async (e) => {
    const { id, email } = e.target.elements;
    try {
      const data = await fetchData('track-your-order', { data: { id, email } });
    } catch (error) {
      setError(error.message);
      setIsError(true);
    }
  }

  const closeErrorBox = () => {
    setIsError(false)
  }

  return <div>
    {isError && <InfoBox error={error} clickHandler={closeErrorBox} />}
    <h1>Track Your Order</h1>
    <p>Please enter your order ID to track your order.</p>
    <form onSubmit={submitHandler}>
      <div>
        <input type="text" placeholder="Order ID" name="id" />
        <input type="text" placeholder="Email address" name="email" />
      </div>
      <button type="submit">Track Order</button>
    </form>
  </div>
}

export default TrackYourOrder;