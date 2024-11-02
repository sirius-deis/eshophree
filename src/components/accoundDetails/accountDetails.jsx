import LabelWithInput from "../label-with-input/labelWithInput";
import Row from "../row/row";
import Button from "../button/button";

const AccountDetails = () => {
  return <div>
    <Row>
      <LabelWithInput label="First Name" />
      <LabelWithInput label="Last Name" />
    </Row>
    <Row>
      <LabelWithInput label="Email Address" />
    </Row>
    <div>
      <h2>Password Change</h2>
      <LabelWithInput label="Current Password" type="password" />
      <LabelWithInput label="New Password" type="password" />
      <LabelWithInput label="Confirm New Password" type="password" />
    </div>
    <Button>Save changes</Button>
  </div>
}

export default AccountDetails;