import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBasketShopping, faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./menu.styles.module.css";

const Menu = () => {
    return (
        <div className={styles.menu}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                    <FontAwesomeIcon icon={faUser} />
                </li>
                <li className={styles.menu__item}>
                    <FontAwesomeIcon icon={faHeart} />
                </li>
                <li className={styles.menu__item}>
                    <span>
                        <FontAwesomeIcon icon={faBasketShopping} />
                    </span>
                    <span>£80.00</span>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
