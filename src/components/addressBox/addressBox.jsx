import LabelWithInput from "../label-with-input/labelWithInput"

const AddressBox = () => {
  return <div>
    <LabelWithInput label="First Name" />
    <LabelWithInput label="Last Name" />
    <LabelWithInput label="Street" />
    <LabelWithInput label="City" />
    <LabelWithInput label="State" />
    <LabelWithInput label="Zip Code" />
    <LabelWithInput label="Country" />
    <LabelWithInput label="Phone Number" />
    <LabelWithInput label="Email Address" />
  </div>
}

export default AddressBox