import PropTypes from 'prop-types';
import { StyledLabelWithInput, StyledLabel, StyledInput } from './labelWithInput.styles';


const LabelWithTextarea = ({ label, name, placeholder, minLength, maxLength, withLabel = true }) => {
  return <div>
    {
      withLabel && <label>{label[0].toUpperCase() + label.slice(1)} *</label>
    }
    <textarea
      name={name}
      placeholder={placeholder}
      required

    />
  </div>
}

LabelWithTextarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
}

return LabelWithTextarea