import styled from "styled-components";
import PropTypes from "prop-types";

const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: bold;
  color: ${(props) =>
    props.color ? `var(--${props.color})` : "var(--text-color-additional)"};
  h1 {
  font-size: 3rem;
  }
  h2 {
  font-size: 2.5rem;
  }
  h3 {
  2rem;
  }
`;

const Heading = ({ children, color }) => {
  return <StyledHeading color={color}>{children}</StyledHeading>;
};

Heading.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default Heading;
