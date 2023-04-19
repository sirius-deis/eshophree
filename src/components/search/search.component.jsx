import { FaSearch } from "react-icons/fa";

import styles from "./search.styles.module.css";

const Search = () => {
    return (
        <form className={styles.search}>
            <div className={styles.search__select}>
                <div className={styles.search__chosen}>All</div>
            </div>
            <input className={styles.search__input} type="text" name="search" />
            <button className={styles.search__btn}>
                <FaSearch />
            </button>
        </form>
    );
};

export default Search;
