import styles from "./signUp.styles.module.css";
import { Link } from "react-router-dom";

import LabelWithInput from "../label-with-input/labelWithInput.component";
import Button from "../button/Button.component";

const SignUp = () => {
    return (
        <div className={styles.signUp}>
            <div className={styles.signUp__row}>
                <div className={styles.signUp__col}>
                    <LabelWithInput label="First name*" type="text" placeholder="Enter your name" />
                </div>
                <div className={styles.signUp__col}>
                    <LabelWithInput label="Last name*" type="text" placeholder="Enter your last name" />
                </div>
            </div>
            <div className={styles.signUp__row}>
                <div className={styles["signUp__col--long"]}>
                    <LabelWithInput label="Email address*" type="email" placeholder="Enter your email address" />
                </div>
            </div>
            <div className={styles.signUp__row}>
                <div className={styles.signUp__col}>
                    <LabelWithInput label="Password*" type="password" placeholder="Enter your password" />
                </div>
                <div className={styles.signUp__col}>
                    <LabelWithInput label="Confirm password*" type="password" placeholder="Confirm your password" />
                </div>
            </div>
            <div className={styles.signUp__row}>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className={styles.signUp__label}>
                    I agree to the <Link to="/policy">privacy policy</Link> *
                </label>
            </div>
            <div className={styles.signUp__row}>
                <Button text="Sign up &rarr;" />
            </div>
        </div>
    );
};

export default SignUp;
