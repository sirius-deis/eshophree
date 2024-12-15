import PropTypes from "prop-types";
import { StyledCheckMark, StyledCheckbox, StyledCheckboxContainer } from './checkboxWithLabel.styles'

const CheckboxWithLabel = ({ labelTitle, clickHandler }) => {
  return <StyledCheckboxContainer>
    {labelTitle}
    <StyledCheckbox type="checkbox" onClick={clickHandler} />
    <StyledCheckMark />
  </StyledCheckboxContainer>
}

CheckboxWithLabel.propTypes = {
  labelTitle: PropTypes.string,
  clickHandler: PropTypes.func,
}

export default CheckboxWithLabel;