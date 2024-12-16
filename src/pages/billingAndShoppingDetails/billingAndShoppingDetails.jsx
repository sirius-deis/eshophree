import { useSelector } from "react-redux";
import AddressBox from "../../components/addressBox/addressBox";
import CheckboxWithLabel from "../../components/checkboxWithLabel/checkboxWithLabel";

const BillingAndShoppingDetails = () => {
  const { user } = useSelector(state => state.user);
  return <div>
    <h1>Billing & Shopping details</h1>
    <h2>
      Billing address
    </h2>
    <hr />
    <AddressBox />
    {!user && <CheckboxWithLabel labelTitle="Create an account?" />}
    <h2>Shipping address</h2>
    <hr />
  </div>
}

export default BillingAndShoppingDetails;