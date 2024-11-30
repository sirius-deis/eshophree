import PropTypes from "prop-types";
import Button from "../button/button";

const QuantityChanger = ({ quantity, changeFn }) => {
  return <div>
    <Button onClickHandler={() => changeFn(1)}>
      +
    </Button>
    {quantity}
    <Button onClickHandler={() => changeFn(-1)}>
      -
    </Button>
  </div>
}

QuantityChanger.propTypes = {
  quantity: PropTypes.number.isRequired,
  changeFn: PropTypes.func.isRequired,
};

export default QuantityChanger;