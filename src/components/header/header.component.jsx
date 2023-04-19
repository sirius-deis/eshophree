import { useSelector } from "react-redux";

import styles from "./header.styles.module.css";

import Search from "../search/search.component";
import Menu from "../menu/menu.component";

const Header = () => {
    const categories = useSelector((state) => state.category.sections);
    console.log(categories);
    return (
        <header className={styles.header}>
            <div className={styles.header__top}>
                <img src="/images/logo.jpg" width="190" height="45" alt="logo" className={styles.header__logo} />
                <Search />
                <Menu />
            </div>
        </header>
    );
};

export default Header;
