import PropTypes from "prop-types";
import Panel from "../panel/panel";

const InfoBox = ({ error }) => {
  return <Panel withBorder bgColor="warning">
    <p>{error}</p>
  </Panel>
}

InfoBox.propTypes = {
  error: PropTypes.string.isRequired,
}

export default InfoBox;