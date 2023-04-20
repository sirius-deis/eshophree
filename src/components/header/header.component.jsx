import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./header.styles.module.css";

import Search from "../search/search.component";
import Menu from "../menu/menu.component";
import Category from "../category/category.component";

const Header = () => {
    const categories = useSelector((state) => state.category.sections);
    return (
        <header className={styles.header}>
            <div className={`${styles.header__top} container`}>
                <Link to="/">
                    <img src="/images/logo.jpg" width="190" height="45" alt="logo" className={styles.header__logo} />
                </Link>
                <Search />
                <Menu />
            </div>
            <div className={styles.header__bottom}>
                <Category categoryList={categories} />
            </div>
        </header>
    );
};

export default Header;
