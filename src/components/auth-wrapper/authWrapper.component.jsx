import { useState } from "react";

import styles from "./authWrapper.styles.module.css";
import SignIn from "../sign-in/signIn.component";
import SignUp from "../sign-up/signUp.component";

const AuthWrapper = () => {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <div className={styles.auth}>
            <ul className={styles.auth__tabs}>
                <li className={styles.auth__tab}>
                    <button
                        className={`${styles.auth__toggleTab} ${!isToggled ? styles.active : ""}`}
                        onClick={() => setIsToggled(false)}
                    >
                        Sign in
                    </button>
                    <div className={styles.auth__line}></div>
                </li>
                <li className={styles.auth__tab}>
                    <button
                        className={`${styles.auth__toggleTab} ${isToggled ? styles.active : ""}`}
                        onClick={() => setIsToggled(true)}
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
