import PropTypes from "prop-types";

import styles from "./categoryDropdown.styles.module.css";

const CategoryDropdown = ({ categories, chooseCategory }) => {
    const categoryChooseHandler = (event) => {
        chooseCategory(event.target.textContent);
    };
    const listToRender = [{ title: "all", id: 0 }, ...categories].map((category) => (
        <li className={styles.category__item} key={category.id} onClick={categoryChooseHandler}>
            {category.title.replace("and", "&")}
        </li>
    ));
    return <ul className={styles.category__list}>{listToRender}</ul>;
};

CategoryDropdown.propTypes = {
    categories: PropTypes.array,
    chooseCategory: PropTypes.func,
};

export default CategoryDropdown;
