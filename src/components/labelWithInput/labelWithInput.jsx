import { StyledLabelWithInput, StyledLabel, StyledInput } from './labelWithInput.styles';

const LabelWithInput = ({
  type = 'text',
  label = 'value',
  name,
  placeholder = `Enter your ${label}`,
  minLength,
  maxLength,
}) => {
  return (
    <StyledLabelWithInput>
      <StyledLabel>
        {label[0].toUpperCase() + label.slice(1)}*
        <StyledInput
          type={type}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          name={name}
          required
        />
      </StyledLabel>
    </StyledLabelWithInput>
  );
};

export default LabelWithInput;
