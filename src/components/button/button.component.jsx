import PropTypes from "prop-types";

import styles from "./button.styles.module.css";

const Button = ({ children, disabled, rounded }) => {
    return (
        <button disabled={disabled} className={`${styles.btn} ${rounded ? styles.rounded : ""}`}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
};

export default Button;
