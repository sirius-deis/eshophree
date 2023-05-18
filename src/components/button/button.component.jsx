import PropTypes from 'prop-types';

import styles from './button.styles.module.css';

const Button = ({ children, disabled, rounded, color, size }) => {
    return (
        <button
            disabled={disabled}
            className={`${styles.btn} ${rounded ? styles.rounded : ''} ${
                color ? styles[`btn--${color}`] : ''
            } ${size ? styles[`btn--${size}`] : ''}`}
        >
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
