import Search from "../search/search.component";

import styles from "./header.styles.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles["header__top"]}>
                <img src="/images/logo.jpg" width="190" height="45" alt="logo" className={styles.logo} />
                <Search />
            </div>
        </header>
    );
};

export default Header;
