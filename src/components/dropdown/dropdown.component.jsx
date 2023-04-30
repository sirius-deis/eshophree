import PropTypes from "prop-types";

import styles from "./dropdown.styles.module.css";

const Dropdown = ({ children }) => {
    return <div className={styles.dropdown}>{children}</div>;
};

Dropdown.propTypes = {
    children: PropTypes.node,
};

export default Dropdown;
