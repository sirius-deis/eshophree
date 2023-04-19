import { Link } from "react-router-dom";

import styles from "./category.styles.module.css";

const Category = ({ categoryList }) => {
    const listToRender = categoryList.map((category) => {
        return (
            <li className={styles.category__item} key={category.id}>
                <Link to={category.linkUrl}>
                    <category.icon />${category.title}
                </Link>
            </li>
        );
    });
    return (
        <nav className={`${styles.category__nav} container`}>
            <ul className={styles.category__list}>{listToRender}</ul>
        </nav>
    );
};

export default Category;
