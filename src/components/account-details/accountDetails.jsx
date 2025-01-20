import { useState } from "react";
import LabelWithInput from "../label-with-input/labelWithInput";
import Row from "../row/row";
import Button from "../button/button";

const AccountDetails = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const handleChange = (value, name) => {
    setData(prevState => ({ ...prevState, [name]: value }))
  }
  return <form>
    <h2>Account Information</h2>
    <Row>
      <LabelWithInput label="First Name" name="firstName" value={data.firstName} setValue={handleChange} />
      <LabelWithInput label="Last Name" name="lastName" value={data.lastName} setValue={handleChange} />
    </Row>
    <Row>
      <LabelWithInput label="Email Address" name="email" value={data.email} setValue={handleChange} />
    </Row>
    <div>
      <h2>Password Change</h2>
      <LabelWithInput label="Current Password" type="password" name="currentPassword" value={data.currentPassword} setValue={handleChange} />
      <LabelWithInput label="New Password" type="password" name="newPassword" value={data.newPassword} setValue={handleChange} />
      <LabelWithInput label="Confirm New Password" type="password" name="confirmPassword" value={data.confirmPassword} setValue={handleChange} />
    </div>
    <Button>Save changes</Button>
  </form>
}

export default AccountDetails;