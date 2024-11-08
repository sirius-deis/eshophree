import { useDispatch } from "react-redux"
import Button from "../button/button"
import Line from "../line/line"
import Row from "../row/row"
import { updateAddress } from "../../store/user/user.actions"
import { StyledAddress, StyledTitle } from './singleAddress.styles'

const SingleAddress = ({ id, title, name, address, city, state, zipCode, phone, email }) => {
  const dispatch = useDispatch();
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const toggleEdit = () => {
    setIsBeingEdited(!isBeingEdited);
  }
  const updateAddressHandler = (e) => {
    const { address, city, state, zipCode, phone, email } = e.target.elements
    dispatch(updateAddress({ address, city, state, zipCode, phone, email }))
  }
  return <StyledAddress key={id}>
    <Row>
      <StyledTitle>{title}</StyledTitle>
      {!isBeingEdited && <Button onClickHandler={toggleEdit}>Edit</Button>}
      {isBeingEdited && <div>
        <Button bgColor="primary" onClickHandler={updateAddressHandler}>Save</Button>
        <Button bgColor="warning" onClickHandler={toggleEdit}>Cancel</Button>
      </div>}
    </Row>
    <Line />
    <h3 >{name}</h3>
    <input type="text" name="address" value={address} />
    <div>
      <input type="text" name="city" value={city} />,
      <input type="text" name="state" value={state} />
      <input type="text" name="zipCode" value={zipCode} />
    </div>
    <input type="text" name="phone" value={phone} />
    <input type="email" name="email" value={email} />
  </StyledAddress>
}

export default SingleAddress;