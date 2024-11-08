import Line from "../line/line"
import Row from "../row/row"
import { StyledAddress, StyledTitle } from './singleAddress.styles'

const SingleAddress = ({ id, title, name, address, city, state, zipCode, phone, email }) => {
  return <StyledAddress key={id}>
    <Row>
      <StyledTitle>{title}</StyledTitle>
      <Button onClickHandler={() => setEditId(id)}>Edit</Button>
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