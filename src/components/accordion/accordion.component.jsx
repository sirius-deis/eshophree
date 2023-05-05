import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';

import styles from './accordion.styles.module.css';

const Accordion = ({ children, label }) => {
    const [isOpened, setIsOpened] = useState(false);
    const onClickHandler = () => {
        setIsOpened(!isOpened);
    };
    return (
        <div className={styles.accordion}>
            <button
                className={styles.accordion__label}
                onClick={onClickHandler}
            >
                {label}
                <MdOutlineArrowDropDown
                    className={`${styles.accordion__arrow} ${
                        isOpened ? `${styles.opened}` : ''
                    }`}
                />
            </button>
            {isOpened && children}
        </div>
    );
};

Accordion.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
};

export default Accordion;
