import { StyledLabelWithInput, StyledLabel, StyledInput } from './labelWithInput.styles';

const LabelWithInput = ({ type }) => {
  return (
    <StyledLabelWithInput>
      <StyledLabel>
        {type[0].toUpperCase() + type.slice(1)}*
        <StyledInput type={type} placeholder={`Enter your ${type}`} />
      </StyledLabel>
    </StyledLabelWithInput>
  );
};

export default LabelWithInput;
