import AddressBox from "../../components/addressBox/addressBox";

const BillingAndShoppingDetails = () => {
  return <div>
    <h1>Billing & Shopping details</h1>
    <h2>
      Billing address
    </h2>
    <hr />
    <AddressBox />
    <h2>Shipping address</h2>
    <hr />
  </div>
}

export default BillingAndShoppingDetails;