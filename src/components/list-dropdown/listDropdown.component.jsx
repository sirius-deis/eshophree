import PropTypes from 'prop-types';

import styles from './listDropdown.styles.module.css';

const ListDropdown = ({ list, setElement }) => {
    const elementChooseHandler = event => {
        setElement(event.target.textContent);
    };
    const listToRender = list.map(item => (
        <li
            className={styles.item}
            key={item.id}
            onClick={elementChooseHandler}
        >
            {item.title}
        </li>
    ));
    return <ul className={styles.list}>{listToRender}</ul>;
};

ListDropdown.propTypes = {
    list: PropTypes.array,
    setElement: PropTypes.func,
};

export default ListDropdown;
