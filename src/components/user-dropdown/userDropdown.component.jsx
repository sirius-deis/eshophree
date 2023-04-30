import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styles from "./userDropdown.styles.module.css";
import { fetchToServer } from "../../utils/util";
import { signOut } from "../../store/user/user.actions";

const UserDropdown = () => {
    const dispatch = useDispatch();
    const { isLoggedIn, currentUser } = useSelector((state) => state.user);

    const logoutHandler = () => {
        try {
            fetchToServer("http://localhost:3000/api/v1/users/logout");
            dispatch(signOut());
        } catch (error) {}
    };

    if (!isLoggedIn) {
        return (
            <div className={styles.user}>
                <ul className={styles.user_list}>
                    <li className={styles.user__item}>
                        <Link className={styles.user__link} to="/login">
                            Sign in
                        </Link>
                    </li>
                    <li className={styles.user__item}>
                        <Link className={styles.user__link} to="/login?toggled=true">
                            Sign up
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
    return (
        <div className={styles.user}>
            <h2 className={styles.user__name}>{currentUser.name}</h2>
            <ul className={styles.user_list}>
                <li className={styles.user__item}>
                    <Link className={styles.user__link} to="/me">
                        My account
                    </Link>
                </li>
                <li className={styles.user__item}>
                    <Link className={styles.user__link} to="/orders">
                        Orders
                    </Link>
                </li>
                <li className={styles.user__item}>
                    <Link className={styles.user__link} to="/reviews">
                        Reviews
                    </Link>
                </li>
            </ul>
            <button className={styles.user__btn} onClick={logoutHandler}>
                Sign out
            </button>
        </div>
    );
};

export default UserDropdown;
