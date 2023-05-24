import { StyledButton } from './button.styles';

const Button = ({ children, bgColor, color }) => {
    return (
        <StyledButton bgColor={bgColor} textColor={color}>
            {children}
        </StyledButton>
    );
};

export default Button;
