import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { useState } from "react"
import Button from "../button/button"
import Line from "../line/line"
import Row from "../row/row"
import { updateAddress } from "../../store/user/user.actions"
import { StyledAddress, StyledTitle, StyledForm, StyledInput, StyledInputGroup, StyledDetailsContainer, StyledDetailParagraph } from './singleAddress.styles'


const SingleAddress = ({ id, title, name, address, city, state, zipCode, phone, email }) => {
  const dispatch = useDispatch();
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [formData, setFormData] = useState({ address, city, state, zipCode, phone, email });
  const toggleEdit = () => {
    setIsBeingEdited(!isBeingEdited);
  }
  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  }
  const updateAddressHandler = (e) => {
    e.preventDefault();
    dispatch(updateAddress(formData));
    toggleEdit();
  }
  return <StyledAddress key={id}>
    <Row>
      <StyledTitle>{title}</StyledTitle>
      {!isBeingEdited && <Button onClickHandler={toggleEdit}>Edit</Button>}
      {isBeingEdited && <div>
        <Button bgColor="primary" onClickHandler={updateAddressHandler}>Save</Button>
        <Button bgColor="warning" onClickHandler={toggleEdit}>Cancel</Button>
      </div>}
    </Row>
    <Line />
    <h3 >{name}</h3>
    {isBeingEdited ? (
      <StyledForm onSubmit={updateAddressHandler}>
        <StyledInput type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Street Address" />
        <StyledInputGroup>
          <StyledInput type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
          <StyledInput type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" />
          <StyledInput type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="Zip Code" />
        </StyledInputGroup>
        <StyledInput type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
        <StyledInput type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
      </StyledForm>
    ) : (
      <StyledDetailsContainer>
        <StyledDetailParagraph>{address}</StyledDetailParagraph>
        <StyledDetailParagraph>{city}, {state} {zipCode}</StyledDetailParagraph>
        <StyledDetailParagraph>{phone}</StyledDetailParagraph>
        <StyledDetailParagraph>{email}</StyledDetailParagraph>
      </StyledDetailsContainer>
    )}
  </StyledAddress>
}

SingleAddress.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default SingleAddress;