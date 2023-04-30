import PropTypes from "prop-types";

import styles from "./checkBoxWithLabel.styles.module.css";

const CheckBoxWithLabel = ({ children, checked, error, handler }) => {
    const onCheckHandler = (event) => {
        handler(event.target.checked);
    };
    return (
        <label className={styles.label}>
            <div className="wrapper">
                <input type="checkbox" checked={checked} className={styles.checkbox} onChange={onCheckHandler} />
                {children}
            </div>
            {error && <p className={styles.error}>{error}</p>}
        </label>
    );
};

CheckBoxWithLabel.propTypes = {
    children: PropTypes.node,
    checked: PropTypes.bool,
    error: PropTypes.string,
    handler: PropTypes.func,
};

export default CheckBoxWithLabel;
