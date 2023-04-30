import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/user/user.actions";

import styles from "./signIn.styles.module.css";
import LabelWithInput from "../label-with-input/labelWithInput.component";
import CheckBoxWithLabel from "../checkbox-with-label/checkboxWithLabel.component";
import Button from "../button/button.component";
import Loader from "../loader/loader.component";

import { checkIfBlank, fetchToServer } from "../../utils/util";

const SignIn = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState(null);
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (setFn) => {
        return (value) => {
            setFn(value);
        };
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        checkIfBlank(email, setEmailErr);
        checkIfBlank(password, setPasswordErr);
        if (!emailErr && !passwordErr) {
            try {
                setIsLoading(true);
                const data = await fetchToServer("http://localhost:3000/api/v1/users/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                });
                dispatch(signIn(data.data.user));
            } catch (error) {
                //TODO:
            }
            setIsLoading(false);
        }
    };

    return (
        <form className={styles.signIn} onSubmit={handleSubmit}>
            <div className={styles.signIn__row}>
                <LabelWithInput
                    label="Email Address*"
                    type="text"
                    placeholder="Enter your email address"
                    value={email}
                    error={emailErr}
                    handler={handleChange(setEmail)}
                />
            </div>
            <div className={styles.signIn__row}>
                <LabelWithInput
                    label="Password*"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    error={passwordErr}
                    handler={handleChange(setPassword)}
                />
            </div>
            <div className={styles.signIn__row}>
                <div className={styles.signIn__wrapper}>
                    <div className={styles.signIn__remember}>
                        <CheckBoxWithLabel checked={isChecked} handler={handleChange(setIsChecked)}>
                            <span>Remember me</span>
                        </CheckBoxWithLabel>
                    </div>
                    <div className={styles.signIn__forgot}>
                        <Link to="/">Forgot password?</Link>
                    </div>
                </div>
            </div>
            <div className={styles.signIn__row}>
                <Button disabled={isLoading}>{isLoading ? <Loader size={3} /> : <span>Sign in &rarr;</span>}</Button>
            </div>
        </form>
    );
};

export default SignIn;
