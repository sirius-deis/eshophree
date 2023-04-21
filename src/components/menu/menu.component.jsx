import { useState } from "react";

import { FaUserCircle, FaRegHeart, FaShoppingBasket } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import Dropdown from "../dropdown/dropdown.component";
import UserDropdown from "../user-dropdown/userDropdown.component";
import styles from "./menu.styles.module.css";

const Menu = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleCart = () => {
        setIsDropdownOpen(false);
        setIsCartOpen(!isCartOpen);
    };

    const toggleDropdown = () => {
        setIsCartOpen(false);
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={styles.menu}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__item} onClick={toggleDropdown}>
                    <FaUserCircle />
                    {isDropdownOpen && (
                        <Dropdown>
                            <UserDropdown />
                        </Dropdown>
                    )}
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
                    <span className={`${isCartOpen ? styles.open : ""}`}>
                        £80.00 <MdOutlineKeyboardArrowDown />
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
