import styles from "./labelWithInput.styles.module.css";

const LabelWithInput = ({ label, type, placeholder, error, handler }) => {
    const onChangeHandler = (event) => {
        handler(event.target.value);
    };
    return (
        <>
            <label className={styles.label}>
                {label}
                {error && <p className={styles.error}>{error}</p>}
                <input
                    className={`${styles.input} ${error ? styles.error : ""}`}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                />
            </label>
        </>
    );
};

export default LabelWithInput;
