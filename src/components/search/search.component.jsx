import { FaSearch } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";

import styles from "./search.styles.module.css";

const Search = () => {
    return (
        <form className={styles.search}>
            <div className={styles.search__select}>
                <div className={styles.search__chosen}>
                    All <MdOutlineArrowDropDown />
                </div>
            </div>
            <input className={styles.search__input} type="text" name="search" placeholder="Enter product name" />
            <button className={styles.search__btn}>
                <FaSearch />
            </button>
        </form>
    );
};

export default Search;
