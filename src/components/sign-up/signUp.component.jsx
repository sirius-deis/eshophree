import styles from "./signUp.styles.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className={styles.signUp}>
            <div className={styles.signUp__row}>
                <div className={styles.signUp__col}>
                    <label className={styles.signUp__label} htmlFor="name">
                        First name*
                    </label>
                    <input className={styles.signUp__input} type="text" id="name" name="name" />
                </div>
                <div className={styles.signUp__col}>
                    <label className={styles.signUp__label} htmlFor="last">
                        Last name*
                    </label>
                    <input className={styles.signUp__input} type="text" id="last" name="last" />
                </div>
            </div>
            <div className={styles.signUp__row}>
                <div className={styles["signUp__col--long"]}>
                    <label className={styles.signUp__label} htmlFor="email">
                        Email address*
                    </label>
                    <input className={styles.signUp__input} type="email" id="email" name="email" />
                </div>
            </div>
            <div className={styles.signUp__row}>
                <div className={styles.signUp__col}>
                    <label className={styles.signUp__label} htmlFor="password">
                        Password*
                    </label>
                    <input className={styles.signUp__input} type="password" id="password" name="password" />
                </div>
                <div className={styles.signUp__col}>
                    <label className={styles.signUp__label} htmlFor="confirm">
                        Confirm password*
                    </label>
                    <input className={styles.signUp__input} type="password" id="confirm" name="confirm" />
                </div>
            </div>
            <div className={styles.signUp__row}>
                <input type="checkbox" />
                <label htmlFor="check" className={styles.signUp__label}>
                    I agree to the <Link to="/policy">privacy policy</Link> *
                </label>
            </div>
            <div className={styles.signUp__row}>
                <button className={styles.signUp__btn}>Sign up &rarr;</button>
            </div>
        </div>
    );
};

export default SignUp;
