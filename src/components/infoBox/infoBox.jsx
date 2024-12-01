import PropTypes from "prop-types";
import Panel from "../panel/panel";
import Button from "../button/button";

const colors = {
  success: "success",
  error: "warning",
}

const InfoBox = ({ error, type, clickHandler }) => {
  return <Panel withBorder bgColor={colors[type]}>
    <p>{error}</p>
    {clickHandler && <div>
      <Button onClickHandler={clickHandler}>
        &#10006;
      </Button>
    </div>}
  </Panel>
}

InfoBox.propTypes = {
  error: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "warning", "error"]),
  clickHandler: PropTypes.func,
}

export default InfoBox;