import PropTypes from "prop-types";
import Panel from "../panel/panel";

const colors = {
  success: "success",
  error: "warning",
}

const InfoBox = ({ error, type }) => {
  return <Panel withBorder bgColor={colors[type]}>
    <p>{error}</p>
  </Panel>
}

InfoBox.propTypes = {
  error: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "warning", "error"]),
}

export default InfoBox;