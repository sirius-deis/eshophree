import LabelWithInput from "../label-with-input/labelWithInput"
import Row from "../row/row"
import Column from "../column/column"


const AddressBox = () => {
  return <div>
    <Row>
      <Column>
        <LabelWithInput label="First Name" name="firstName" />
        <LabelWithInput label="Last Name" name="lastName" />
      </Column>
    </Row>
    <Row>
      <Column>
        <LabelWithInput label="Street" name="street" />
        <LabelWithInput label="City" name="city" />
        <LabelWithInput label="State" name="state" />
        <LabelWithInput label="Zip Code" name="zipCode" />
        <LabelWithInput label="Country" name="country" />
      </Column>
    </Row>
    <Row>
      <Column>
        <LabelWithInput label="Phone Number" name="phone" />
        <LabelWithInput label="Email Address" name="email" />
      </Column>
    </Row>
  </div>
}

export default AddressBox