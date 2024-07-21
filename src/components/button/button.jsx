import PropTypes from "prop-types";
import {
  StyledRoundButton,
  StyledDropdownButton,
  StyledPlainButton,
} from "./button.styles";

const getButton = (kind) => {
  switch (kind) {
    case "round":
      return StyledRoundButton;
    case "dropdown":
      return StyledDropdownButton;
    default:
      return StyledPlainButton;
  }
};

const Button = ({
  children,
  kind,
  bgColor,
  color,
  onClickHandler,
  onMouseEnterHandler,
  bordered,
  disabled,
}) => {
  const ButtonEl = getButton(kind);
  return (
    <ButtonEl
      color={color}
      bgColor={bgColor}
      type="button"
      onClick={onClickHandler}
      onMouseEnter={onMouseEnterHandler}
      bordered={bordered}
      disabled={disabled}
    >
      {children}
    </ButtonEl>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  kind: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  onClickHandler: PropTypes.func,
  onMouseEnterHandler: PropTypes.func,
  bordered: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
