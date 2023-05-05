import PropTypes, { bool } from 'prop-types';

import styles from './accordionSelect.styles.module.css';

const AccordionSelect = ({ list = [] }) => {
    const listToRender = list.map(item => (
        <li className={styles.accordion__item} key={item.id}>
            <input
                className={styles.accordion__input}
                type='checkbox'
                name={item.title}
                id={item.title}
            />
            <label className={styles.accordion__label} htmlFor={item.title}>
                {item.title}
            </label>
        </li>
    ));
    return <ul className={styles.accordion__list}>{listToRender}</ul>;
};

AccordionSelect.propTypes = {
    list: PropTypes.array,
};

export default AccordionSelect;
