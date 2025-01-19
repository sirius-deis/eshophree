import { StyledSpinner, StyledBackdrop } from './spinner.styles';

const Spinner = () => {
  return (
    <StyledBackdrop>
      <StyledSpinner role='status' />
    </StyledBackdrop>
  );
};

export default Spinner;
