import styles from "./labelWithInput.styles.module.css";

const LabelWithInput = ({ label, type, placeholder }) => {
    return (
        <>
            <label className={styles.label}>
                {label}
                <input className={styles.input} type={type} placeholder={placeholder} />
            </label>
        </>
    );
};

export default LabelWithInput;
