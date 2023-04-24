import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./signUp.styles.module.css";

import LabelWithInput from "../label-with-input/labelWithInput.component";
import CheckBoxWithLabel from "../checkbox-with-label/checkboxWithLabel.component";
import Button from "../button/Button.component";
import Loader from "../loader/loader.component";

import { checkIfBlank, fetchToServer } from "../../utils/util";

const SignUp = ({ toggler }) => {
    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState(null);
    const [surname, setSurname] = useState("");
    const [surnameErr, setSurnameErr] = useState(null);
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState(null);
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState(null);
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordConfirmErr, setPasswordConfirmErr] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedErr, setIsCheckedErr] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (setFn) => {
        return (value) => {
            setFn(value);
        };
    };

    const tryToSignUp = async () => {
        setIsLoading(true);
        try {
            await fetchToServer("http://localhost:3000/api/v1/users/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    surname,
                    email,
                    password,
                    passwordConfirm,
                }),
            });
            restForm();
            toggler();
        } catch (error) {
            //TODO:
        }
        setIsLoading(false);
    };

    const restForm = () => {
        setName("");
        setSurname("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
        setIsChecked(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        checkIfBlank(name, setNameErr);
        checkIfBlank(surname, setSurnameErr);
        checkIfBlank(email, setEmailErr);
        checkIfBlank(password, setPasswordErr);
        checkIfBlank(passwordConfirm, setPasswordConfirmErr);
        if (!isChecked) {
            setIsCheckedErr("You should confirm privacy policy");
        }

        if (!nameErr && !surnameErr && !emailErr && !passwordErr && !passwordConfirmErr && !isCheckedErr) {
            if (password !== passwordConfirm) {
                setPasswordErr("Passwords are not the same");
                setPasswordConfirmErr("Passwords are not the same");
                return;
            }
            tryToSignUp();
        }
    };

    return (
        <form className={styles.signUp} onSubmit={handleSubmit}>
            <div className={styles.signUp__row}>
                <div className={styles.signUp__col}>
                    <LabelWithInput
                        label="First name*"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        error={nameErr}
                        handler={handleChange(setName)}
                    />
                </div>
                <div className={styles.signUp__col}>
                    <LabelWithInput
                        label="Last name*"
                        type="text"
                        placeholder="Enter your last name"
                        value={surname}
                        error={surnameErr}
                        handler={handleChange(setSurname)}
                    />
                </div>
            </div>
            <div className={styles.signUp__row}>
                <div className={styles["signUp__col--long"]}>
                    <LabelWithInput
                        label="Email address*"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        error={emailErr}
                        handler={handleChange(setEmail)}
                    />
                </div>
            </div>
            <div className={styles.signUp__row}>
                <div className={styles.signUp__col}>
                    <LabelWithInput
                        label="Password*"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        error={passwordErr}
                        handler={handleChange(setPassword)}
                    />
                </div>
                <div className={styles.signUp__col}>
                    <LabelWithInput
                        label="Confirm password*"
                        type="password"
                        placeholder="Confirm your password"
                        value={passwordConfirm}
                        error={passwordConfirmErr}
                        handler={handleChange(setPasswordConfirm)}
                    />
                </div>
            </div>
            <div className={styles.signUp__row}>
                <CheckBoxWithLabel checked={isChecked} error={isCheckedErr} handler={handleChange(setIsChecked)}>
                    <span>I agree to the</span>
                    <Link to="/policy">privacy policy</Link>
                    <span> *</span>
                </CheckBoxWithLabel>
            </div>
            <div className={styles.signUp__row}>
                <Button disabled={isLoading}> {isLoading ? <Loader size={3} /> : <span>Sign up &rarr;</span>} </Button>
            </div>
        </form>
    );
};

export default SignUp;
