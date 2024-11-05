import { useSelector } from "react-redux";
import Line from "../line/line";
import { StyledAddresses, StyledTitle } from './address.styles'

const Addresses = () => {
  const { addresses } = useSelector(state => state.user)
  return <StyledAddresses>
    <StyledTitle>The following addresses will be used on the checkout page by default</StyledTitle>
    {addresses.map(address => {
      return <div key={address.id}>
        <h2>{address.title}</h2>
        <Line />
        <h3>{address.name}</h3>
        <p>{address.address}</p>
        <p>{address.city}, {address.state} {address.zipCode}</p>
        <p>{address.phone}</p>
        <p>{address.email}</p>
      </div>
    })}
  </StyledAddresses>
}

export default Addresses;