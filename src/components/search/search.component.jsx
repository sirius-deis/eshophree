import { useState } from "react";
import PropTypes from "prop-types";

import { FaSearch } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";

import Dropdown from "../dropdown/dropdown.component";
import CategoryDropdown from "../category-dropdown/categoryDropdown.component";

import styles from "./search.styles.module.css";

const Search = ({ categories = [], showDropdown = true, rounded }) => {
    const [chosenCategory, setChosenCategory] = useState("all");
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const chooseCategory = (categoryName) => {
        setChosenCategory(categoryName);
        setIsOpen(false);
    };

    return (
        <form className={`${styles.search} ${rounded ? styles.rounded : ""}`}>
            {showDropdown && (
                <div className={styles.search__select}>
                    <div className={`${styles.search__chosen} ${isOpen ? styles.open : ""}`} onClick={toggleDropdown}>
                        <span className={styles.chosen}>{chosenCategory}</span> <MdOutlineArrowDropDown />
                    </div>
                    {isOpen && (
                        <Dropdown>
                            <CategoryDropdown categories={categories} chooseCategory={chooseCategory} />
                        </Dropdown>
                    )}
                </div>
            )}
            <input className={styles.search__input} type="text" name="search" placeholder="Enter a product name" />
            <button className={styles.search__btn}>
                <FaSearch />
            </button>
        </form>
    );
};

Search.propTypes = {
    categories: PropTypes.array,
    showDropdown: PropTypes.bool,
    rounded: PropTypes.bool,
};

export default Search;
