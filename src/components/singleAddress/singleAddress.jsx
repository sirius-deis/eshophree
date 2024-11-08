import Button from "../button/button"
import Line from "../line/line"
import Row from "../row/row"
import { StyledAddress, StyledTitle } from './singleAddress.styles'

const SingleAddress = ({ id, title, name, address, city, state, zipCode, phone, email }) => {
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const toggleEdit = () => {
    setIsBeingEdited(!isBeingEdited);
  }
  return <StyledAddress key={id}>
    <Row>
      <StyledTitle>{title}</StyledTitle>
      {!isBeingEdited && <Button onClickHandler={toggleEdit}>Edit</Button>}
      {isBeingEdited && <div>
        <Button bgColor="primary">Save</Button>
        <Button bgColor="warning" onClickHandler={toggleEdit}>Cancel</Button>
      </div>}
    </Row>
    <Line />
    <h3>{name}</h3>
    <p>{address}</p>
    <p>{city}, {state} {zipCode}</p>
    <p>{phone}</p>
    <p>{email}</p>
  </StyledAddress>
}

export default SingleAddress;