import styles from "./signIn.styles.module.css";
import { Link, useNavigate } from "react-router-dom";

import LabelWithInput from "../label-with-input/labelWithInput.component";
import Button from "../button/Button.component";

const SignIn = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.signIn}>
            <div className={styles.signIn__row}>
                <LabelWithInput label="Email Address*" type="text" placeholder="Enter your email address" />
            </div>
            <div className={styles.signIn__row}>
                <LabelWithInput label="Password*" type="password" placeholder="Enter your password" />
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
                <Button text="Sign in &rarr;" />
            </div>
        </div>
    );
};

export default SignIn;
