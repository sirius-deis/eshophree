import styles from "./categoryDropdown.styles.module.css";

const CategoryDropdown = ({ categories }) => {
    const listToRender = [{ title: "all", id: 0 }, ...categories].map((category) => (
        <li className={styles.category__item} key={category.id}>
            {category.title}
        </li>
    ));
    return <ul className={styles.category__list}>{listToRender}</ul>;
};

export default CategoryDropdown;
