import { StyledRoundButton, StyledDropdownButton } from './button.styles';

const Button = ({ children, kind, bgColor, color, type, onClick }) => {
  switch (kind) {
    case 'round':
      return (
        <StyledRoundButton bgColor={bgColor} textColor={color} type={type}>
          {children}
        </StyledRoundButton>
      );
    case 'dropdown':
    default:
      return (
        <StyledDropdownButton bgColor={bgColor} textColor={color} type={type} onClick={onClick}>
          {children}
        </StyledDropdownButton>
      );
  }
};

export default Button;
