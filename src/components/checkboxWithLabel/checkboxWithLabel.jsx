import PropTypes from "prop-types";
import { StyledCheckMark, StyledCheckbox, StyledCheckboxContainer } from './checkboxWithLabel.styles'

const CheckboxWithLabel = ({ labelTitle, isChecked, name, clickHandler }) => {
  return <StyledCheckboxContainer>
    {labelTitle}
    <StyledCheckbox type="checkbox" checked={isChecked} name={name} onClick={clickHandler} />
    <StyledCheckMark />
  </StyledCheckboxContainer>
}

CheckboxWithLabel.propTypes = {
  labelTitle: PropTypes.string,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  clickHandler: PropTypes.func,
}

export default CheckboxWithLabel;