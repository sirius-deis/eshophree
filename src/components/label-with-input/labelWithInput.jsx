import PropTypes from 'prop-types';
import { StyledLabelWithInput, StyledLabel, StyledInput } from './labelWithInput.styles';

const LabelWithInput = ({
  type = 'text',
  label = type,
  name,
  placeholder = `Enter your ${label}`,
  minLength,
  maxLength,
  withLabel = true,
  value,
  setValue
}) => {
  return (
    <StyledLabelWithInput>
      <StyledLabel>
        {withLabel && label[0].toUpperCase() + label.slice(1)} *
        <StyledInput
          type={type}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          name={name}
          required
          value={value}
          onChange={(e) => setValue(e.target.value, e.target.name)}
        />
      </StyledLabel>
    </StyledLabelWithInput>
  );
};

LabelWithInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  withLabel: PropTypes.bool,
  value: PropTypes.string,
  setValue: PropTypes.func
};

export default LabelWithInput;
