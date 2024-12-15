import PropTypes from "prop-types";

const CheckboxWithLabel = ({ labelTitle, clickHandler }) => {
  return <label>
    {labelTitle}
    <input type="checkbox" onClick={clickHandler} />
    <span></span>
  </label>
}

CheckboxWithLabel.propTypes = {
  labelTitle: PropTypes.string,
  clickHandler: PropTypes.func,
}

export default CheckboxWithLabel;