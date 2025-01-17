import { useSelector } from "react-redux";
import { StyledAddresses, StyledTitle, NoAddressMessage } from './addresses.styles';
import SingleAddress from "../singleAddress/singleAddress";

const Addresses = () => {
  const { addresses } = useSelector(state => state.user);
  return (
    <StyledAddresses>
      <StyledTitle>The following addresses will be used on the checkout page by default</StyledTitle>
      {addresses.map(address => {
        return <SingleAddress key={address.id} {...address} />
      })}
      {!addresses.length && <NoAddressMessage>No address available</NoAddressMessage>}
    </StyledAddresses>
  )
}

export default Addresses;