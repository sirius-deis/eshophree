import styles from "./signIn.styles.module.css";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.signIn}>
            <div className={styles.signIn__row}>
                <label className={styles.signIn__label} htmlFor="email">
                    Email Address*
                </label>
                <input
                    className={styles.signIn__input}
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email address"
                />
            </div>
            <div className={styles.signIn__row}>
                <label className={styles.signIn__label} htmlFor="password">
                    Password*
                </label>
                <input
                    className={styles.signIn__input}
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Password"
                />
            </div>
            <div className={styles.signIn__row}>
                <div className={styles.signIn__wrapper}>
                    <div className={styles.signIn__remember}>
                        <input type="checkbox" id="check" />
                        <label className={styles.signIn__label} htmlFor="check">
                            Remember me
                        </label>
                    </div>
                    <div className={styles.signIn__forgot}>
                        <Link to="/">Forgot password?</Link>
                    </div>
                </div>
            </div>
            <div className={styles.signIn__row}>
                <button className={styles.signIn__btn}>Sign in &rarr;</button>
            </div>
        </div>
    );
};

export default SignIn;
