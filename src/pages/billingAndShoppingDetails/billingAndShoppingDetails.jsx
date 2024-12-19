import { useSelector } from "react-redux";
import AddressBox from "../../components/addressBox/addressBox";
import CheckboxWithLabel from "../../components/checkboxWithLabel/checkboxWithLabel";
import { useState } from "react";
import fetchData from "../../utils/fetchData";

const BillingAndShoppingDetails = () => {
  const { user } = useSelector(state => state.user);
  const [shouldAccountBeCreated, setShouldAccountBeCreated] = useState(false)
  const createAccount = (e) => {
    const { phone, email } = e.target.elements
    fetchData("register", { data: { phone, email } })
  }
  const sendData = (e) => {
    e.preventDefault();
    const { address, city, state, zipCode, phone, email } = e.target.elements
    fetchData("place-order", { data: { address, city, state, zipCode, phone, email } })
    if (shouldAccountBeCreated) {
      createAccount(e)
    }
  }
  return <form onSubmit={sendData}>
    <h1>Billing & Shopping details</h1>
    <h2>
      Billing address
    </h2>
    <hr />
    <AddressBox />
    {!user && <CheckboxWithLabel labelTitle="Create an account?" clickHandler={setShouldAccountBeCreated} />}
    <h2>Shipping address</h2>
    <hr />
  </form>
}

export default BillingAndShoppingDetails;