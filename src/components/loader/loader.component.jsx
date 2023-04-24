import styles from "./loader.styles.module.css";

const Loader = ({ size = 4 }) => {
    return (
        <div className={`${styles.spinner} ${styles.center}`} style={{ fontSize: `${size}rem` }}>
            {new Array(12).fill("").map((_, i) => (
                <div key={i} className={styles["spinner-blade"]}></div>
            ))}
        </div>
    );
};

export default Loader;
