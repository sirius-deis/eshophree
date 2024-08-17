import PropTypes from "prop-types";
import { StyledHeading } from "./heading.styles";

const Heading = ({ children, color }) => {
  return <StyledHeading color={color}>{children}</StyledHeading>;
};

Heading.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default Heading;
