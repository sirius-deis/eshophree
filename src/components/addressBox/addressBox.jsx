import LabelWithInput from "../label-with-input/labelWithInput"

const AddressBox = () => {
  return <div>
    <div>
      <LabelWithInput label="First Name" />
      <LabelWithInput label="Last Name" />
    </div>
    <div>
      <LabelWithInput label="Street" />
      <LabelWithInput label="City" />
      <LabelWithInput label="State" />
      <LabelWithInput label="Zip Code" />
      <LabelWithInput label="Country" />
    </div>
    <div>
      <LabelWithInput label="Phone Number" />
      <LabelWithInput label="Email Address" />
    </div>
  </div>
}

export default AddressBox