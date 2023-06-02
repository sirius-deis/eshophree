import PropTypes from 'prop-types';
import { StyledRoundButton, StyledDropdownButton, StyledPlainButton } from './button.styles';

const Button = ({ children, kind, bgColor, color, onClickHandler, onMouseEnterHandler, bordered }) => {
  switch (kind) {
    case 'round':
      return (
        <StyledRoundButton style={{ color, backgroundColor: bgColor }} type='button'>
          {children}
        </StyledRoundButton>
      );
    case 'dropdown':
      return (
        <StyledDropdownButton
          style={{ color, backgroundColor: bgColor }}
          type='button'
          onClick={onClickHandler}
          onMouseEnter={onMouseEnterHandler}
        >
          {children}
        </StyledDropdownButton>
      );
    default:
      return (
        <StyledPlainButton style={{ color, backgroundColor: bgColor }} type='button' bordered={bordered}>
          {children}
        </StyledPlainButton>
      );
  }
};

Button.propTypes = {
  children: PropTypes.node,
  kind: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  onClickHandler: PropTypes.func,
  onMouseEnterHandler: PropTypes.func,
};

export default Button;
