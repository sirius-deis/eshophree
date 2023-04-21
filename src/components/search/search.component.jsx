import { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";

import Dropdown from "../dropdown/dropdown.component";
import CategoryDropdown from "../category-dropdown/categoryDropdown.component";

import styles from "./search.styles.module.css";

const Search = ({ categories }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <form className={styles.search}>
            <div className={styles.search__select}>
                <div className={`${styles.search__chosen} ${isOpen ? styles.open : ""}`} onClick={toggleDropdown}>
                    All <MdOutlineArrowDropDown />
                </div>
                {isOpen && (
                    <Dropdown isOpen={isOpen}>
                        <CategoryDropdown categories={categories} />
                    </Dropdown>
                )}
            </div>
            <input className={styles.search__input} type="text" name="search" placeholder="Enter a product name" />
            <button className={styles.search__btn}>
                <FaSearch />
            </button>
        </form>
    );
};

export default Search;
