import styles from "./Button.styles.module.css";

const Button = ({ children, disabled }) => {
    return (
        <button disabled={disabled} className={styles.btn}>
            {children}
        </button>
    );
};

export default Button;
