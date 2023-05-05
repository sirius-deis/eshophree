import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './category.styles.module.css';

const Category = ({ categoryList = [] }) => {
    const listToRender = categoryList.map(category => {
        return (
            <li className={styles.category__item} key={category.id}>
                <Link className={styles.category__link} to={category.linkUrl}>
                    {category.icon && <category.icon />}
                    <span>{category.title.replace('and', '&')}</span>
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

Category.propTypes = {
    categoryList: PropTypes.array,
};

export default Category;
