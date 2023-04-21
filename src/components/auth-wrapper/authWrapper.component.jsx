import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./authWrapper.styles.module.css";
import SignIn from "../sign-in/signIn.component";
import SignUp from "../sign-up/signUp.component";

const AuthWrapper = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isToggled, setIsToggled] = useState(searchParams.get("toggled"));

    const toggleTabToFalse = () => {
        setIsToggled(false);
        setSearchParams("");
    };

    const toggleTabToTrue = () => {
        setIsToggled(true);
        setSearchParams("toggled=true");
    };

    return (
        <div className={styles.auth}>
            <ul className={styles.auth__tabs}>
                <li className={styles.auth__tab}>
                    <button
                        className={`${styles.auth__toggleTab} ${!isToggled ? styles.active : ""}`}
                        onClick={toggleTabToFalse}
                    >
                        Sign in
                    </button>
                    <div className={styles.auth__line}></div>
                </li>
                <li className={styles.auth__tab}>
                    <button
                        className={`${styles.auth__toggleTab} ${isToggled ? styles.active : ""}`}
                        onClick={toggleTabToTrue}
                    >
                        Sign up
                    </button>
                    <div className={styles.auth__line}></div>
                </li>
            </ul>
            <div className={styles.auth__line}></div>
            <div className={`${styles.auth__toggleContainer} ${isToggled ? styles.auth__toggle : ""}`}>
                <SignIn />
                <SignUp />
            </div>
        </div>
    );
};

export default AuthWrapper;
