import PropTypes from 'prop-types';

import styles from './accordionSelect.styles.module.css';

const AccordionSelect = ({ list = [], chosen, setChosenCategories }) => {
    const onClickHandle = ({ target }) => {
        if (target.checked) {
            setChosenCategories([...chosen, target.name]);
        } else {
            const index = chosen.findIndex(item => item === target.name);
            setChosenCategories([
                ...chosen.slice(0, index),
                ...chosen.slice(index + 1),
            ]);
        }
    };

    const listToRender = list.map(item => (
        <li className={styles.accordion__item} key={item.id}>
            <input
                className={styles.accordion__input}
                type='checkbox'
                name={item.title}
                id={item.title}
                checked={chosen.includes(item.title)}
                onChange={onClickHandle}
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
    chosen: PropTypes.array,
    setChosenCategories: PropTypes.func,
};

export default AccordionSelect;
