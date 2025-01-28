import PropTypes from "prop-types";
import Panel from "../panel/panel";
import Button from "../button/button";

const colors = {
  success: "success",
  message: "warning",
}

const InfoBox = ({ message, type, clickHandler = () => { } }) => {
  return <Panel withBorder bgColor={colors[type]}>
    <p>{message}</p>
    {clickHandler && <div>
      <Button onClickHandler={clickHandler}>
        &#10006;
      </Button>
    </div>}
  </Panel>
}

InfoBox.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "warning", "error"]),
  clickHandler: PropTypes.func,
}

export default InfoBox;