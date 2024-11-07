import Line from "../line/line"
import Row from "../row/row"

const SingleAddress = ({ id, title, name, address, city, state, zipCode, phone, email }) => {
  return <div key={id}>
    <Row>
      <h2>{title}</h2>
      <Button onClickHandler={() => setEditId(id)}>Edit</Button>
    </Row>
    <Line />
    <h3>{name}</h3>
    <p>{address}</p>
    <p>{city}, {state} {zipCode}</p>
    <p>{phone}</p>
    <p>{email}</p>
  </div>
}

export default SingleAddress;