import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './userDropdown.styles.module.css';
import { fetchToServer } from '../../utils/util';
import { signOut } from '../../store/user/user.actions';
import { clearCart } from '../../store/cart/cart.actions';

const UserDropdown = ({ toggleDropdown }) => {
    const dispatch = useDispatch();
    const { isLoggedIn, currentUser } = useSelector(state => state.user);

    const logoutHandler = () => {
        try {
            fetchToServer('http://localhost:3000/api/v1/users/logout', {
                method: 'GET',
            });
            dispatch(signOut());
            dispatch(clearCart());
        } catch (error) {
            //TODO:
        }
    };

    const onClickHandle = () => {
        toggleDropdown();
    };

    if (!isLoggedIn) {
        return (
            <div className={styles.user}>
                <ul className={styles.user_list}>
                    <li className={styles.user__item}>
                        <Link
                            className={styles.user__link}
                            to='/login'
                            onClick={onClickHandle}
                        >
                            Sign in
                        </Link>
                    </li>
                    <li className={styles.user__item}>
                        <Link
                            className={styles.user__link}
                            to='/login'
                            onClick={onClickHandle}
                        >
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
                    <Link className={styles.user__link} to='/me'>
                        My account
                    </Link>
                </li>
                <li className={styles.user__item}>
                    <Link className={styles.user__link} to='/orders'>
                        Orders
                    </Link>
                </li>
                <li className={styles.user__item}>
                    <Link className={styles.user__link} to='/reviews'>
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

UserDropdown.propTypes = {
    toggleDropdown: PropTypes.func,
};

export default UserDropdown;
