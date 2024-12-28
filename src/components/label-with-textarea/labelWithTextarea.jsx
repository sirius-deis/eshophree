import PropTypes from 'prop-types';


const LabelWithTextarea = ({ label, name, placeholder, minLength, maxLength, withLabel = true, value, setValue }) => {
  return <div>
    {
      withLabel && <label>{label[0].toUpperCase() + label.slice(1)} *</label>
    }
    <textarea
      name={name}
      placeholder={placeholder}
      required
      minLength={minLength}
      maxLength={maxLength}
      value={value}
      rows={7}
      cols={70}
      onChange={(e) => setValue(e.target.value)}
    />
  </div>
}

LabelWithTextarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  withLabel: PropTypes.bool,
  value: PropTypes.string,
  setValue: PropTypes.func
}

export default LabelWithTextarea