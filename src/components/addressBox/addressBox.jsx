import LabelWithInput from "../label-with-input/labelWithInput"

const AddressBox = () => {
  return <div>
    <div>
      <LabelWithInput label="First Name" name="firstName" />
      <LabelWithInput label="Last Name" name="lastName" />
    </div>
    <div>
      <LabelWithInput label="Street" name="street" />
      <LabelWithInput label="City" name="city" />
      <LabelWithInput label="State" name="state" />
      <LabelWithInput label="Zip Code" name="zipCode" />
      <LabelWithInput label="Country" name="country" />
    </div>
    <div>
      <LabelWithInput label="Phone Number" name="phone" />
      <LabelWithInput label="Email Address" name="email" />
    </div>
  </div>
}

export default AddressBox