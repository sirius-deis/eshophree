import styles from "./signIn.styles.module.css";
import { Link, useNavigate } from "react-router-dom";

import LabelWithInput from "../label-with-input/labelWithInput.component";
import CheckBoxWithLabel from "../checkbox-with-label/checkboxWithLabel.component";
import Button from "../button/Button.component";

const SignIn = () => {
    const navigate = useNavigate();
    return (
        <form className={styles.signIn}>
            <div className={styles.signIn__row}>
                <LabelWithInput label="Email Address*" type="text" placeholder="Enter your email address" />
            </div>
            <div className={styles.signIn__row}>
                <LabelWithInput label="Password*" type="password" placeholder="Enter your password" />
            </div>
            <div className={styles.signIn__row}>
                <div className={styles.signIn__wrapper}>
                    <div className={styles.signIn__remember}>
                        <CheckBoxWithLabel>
                            <span>Remember me</span>
                        </CheckBoxWithLabel>
                    </div>
                    <div className={styles.signIn__forgot}>
                        <Link to="/">Forgot password?</Link>
                    </div>
                </div>
            </div>
            <div className={styles.signIn__row}>
                <Button>{"Sign in &rarr;"}</Button>
            </div>
        </form>
    );
};

export default SignIn;
