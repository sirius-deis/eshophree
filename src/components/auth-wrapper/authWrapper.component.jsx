import { useState } from 'react';

import styles from './authWrapper.styles.module.css';
import SignIn from '../sign-in/signIn.component';
import SignUp from '../sign-up/signUp.component';

const AuthWrapper = () => {
    const [isToggled, setIsToggled] = useState('false');

    const toggleTabToFalse = () => {
        setIsToggled(false);
    };

    const toggleTabToTrue = () => {
        setIsToggled(true);
    };

    return (
        <div className={styles.auth}>
            <ul className={styles.auth__tabs}>
                <li className={styles.auth__tab}>
                    <button
                        className={`${styles.auth__toggleTab} ${
                            !isToggled ? styles.active : ''
                        }`}
                        onClick={toggleTabToFalse}
                    >
                        Sign in
                    </button>
                    <div className={styles.auth__line}></div>
                </li>
                <li className={styles.auth__tab}>
                    <button
                        className={`${styles.auth__toggleTab} ${
                            isToggled ? styles.active : ''
                        }`}
                        onClick={toggleTabToTrue}
                    >
                        Sign up
                    </button>
                    <div className={styles.auth__line}></div>
                </li>
            </ul>
            <div className={styles.auth__line}></div>
            <div
                className={`${styles.auth__toggleContainer} ${
                    isToggled ? styles.auth__toggle : ''
                }`}
            >
                <SignIn />
                <SignUp toggler={toggleTabToFalse} />
            </div>
        </div>
    );
};

export default AuthWrapper;
