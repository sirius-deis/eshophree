import PropTypes from "prop-types";

import styles from "./dropdown.styles.module.css";

const Dropdown = ({ children }) => {
    const handleClick = (e) => {
        e.stopPropagation();
    };
    return (
        <div className={styles.dropdown} onClick={handleClick}>
            {children}
        </div>
    );
};

Dropdown.propTypes = {
    children: PropTypes.node,
};

export default Dropdown;
