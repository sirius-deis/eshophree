import { StyledRoundButton, StyledPlainButton } from './button.styles';

const Button = ({ children, kind, bgColor, color }) => {
    switch (kind) {
        case 'round':
            return (
                <StyledRoundButton bgColor={bgColor} textColor={color}>
                    {children}
                </StyledRoundButton>
            );
        case 'plain':
        default:
            return (
                <StyledPlainButton bgColor={bgColor} textColor={color}>
                    {children}
                </StyledPlainButton>
            );
    }
};

export default Button;
