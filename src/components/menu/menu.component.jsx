import { FaUserCircle, FaRegHeart, FaShoppingBasket } from "react-icons/fa";

import styles from "./menu.styles.module.css";

const Menu = () => {
    return (
        <div className={styles.menu}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                    <FaUserCircle />
                </li>
                <li className={styles.menu__item}>
                    <FaRegHeart />
                </li>
                <li className={styles.menu__item}>
                    <span>
                        <FaShoppingBasket />
                    </span>
                    <span>£80.00</span>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
