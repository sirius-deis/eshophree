import { useSelector } from "react-redux";

const Addresses = () => {
  const { addresses } = useSelector(state => state.user)
  return <div>
    <h2>The following addresses will be used on the checkout page by default</h2>
    {addresses.map(address => {
      return <div key={address.id}>
        <h2>{address.title}</h2>
        <br />
        <h3>{address.name}</h3>
        <p>{address.address}</p>
        <p>{address.city}, {address.state} {address.zipCode}</p>
        <p>{address.phone}</p>
        <p>{address.email}</p>
      </div>
    })}
  </div>
}

export default Addresses;