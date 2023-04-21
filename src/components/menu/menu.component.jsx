import { useState } from "react";

import { FaUserCircle, FaRegHeart, FaShoppingBasket } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import styles from "./menu.styles.module.css";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.menu}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                    <FaUserCircle />
                </li>
                <li className={styles.menu__item}>
                    <span className={styles.menu__amount}>2</span>
                    <FaRegHeart />
                </li>
                <li className={`${styles.menu__item}`} onClick={toggleCart}>
                    <span className={styles.menu__cart}>
                        <span className={styles.menu__amount}>4</span>
                        <FaShoppingBasket />
                    </span>
                    <span className={`${isOpen ? styles.open : ""}`}>
                        £80.00 <MdOutlineKeyboardArrowDown />
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
