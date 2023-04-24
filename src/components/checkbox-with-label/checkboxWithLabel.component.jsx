import styles from "./checkBoxWithLabel.styles.module.css";

const CheckBoxWithLabel = ({ children, error, handler }) => {
    const onCheckHandler = (event) => {
        handler(event.target.checked);
    };
    return (
        <label className={styles.label}>
            <div className="wrapper">
                <input type="checkbox" className={styles.checkbox} onChange={onCheckHandler} />
                {children}
            </div>
            {error && <p className={styles.error}>{error}</p>}
        </label>
    );
};

export default CheckBoxWithLabel;
