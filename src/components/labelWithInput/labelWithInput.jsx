import { StyledLabelWithInput, StyledLabel, StyledInput } from './labelWithInput.styles';

const LabelWithInput = ({ type, label = type, name, placeholder = `Enter your ${type}`, validation }) => {
  return (
    <StyledLabelWithInput>
      <StyledLabel>
        {label[0].toUpperCase() + label.slice(1)}*
        <StyledInput type={type} placeholder={placeholder} {...validation} name={name} required />
      </StyledLabel>
    </StyledLabelWithInput>
  );
};

export default LabelWithInput;
