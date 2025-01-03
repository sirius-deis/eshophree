import LabelWithInput from "../label-with-input/labelWithInput"
import Row from "../row/row"
import Column from "../column/column"
import { useState } from "react"


const AddressBox = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  return <div>
    <Row>
      <Column>
        <LabelWithInput label="First Name" name="firstName" value={firstName} setValue={setFirstName} />
        <LabelWithInput label="Last Name" name="lastName" value={lastName} setValue={setLastName} />
      </Column>
    </Row>
    <Row>
      <Column>
        <LabelWithInput label="Street" name="street" value={streetAddress} setValue={setStreetAddress} />
        <LabelWithInput label="City" name="city" value={city} setValue={setCity} />
        <LabelWithInput label="State" name="state" value={state} setValue={setState} />
        <LabelWithInput label="Zip Code" name="zipCode" value={zipCode} setValue={setZipCode} />
        <LabelWithInput label="Country" name="country" value={country} setValue={setCountry} />
      </Column>
    </Row>
    <Row>
      <Column>
        <LabelWithInput label="Phone Number" name="phone" value={phoneNumber} setValue={setPhoneNumber} />
        <LabelWithInput label="Email Address" name="email" value={email} setValue={setEmail} />
      </Column>
    </Row>
  </div>
}

export default AddressBox