import { useState } from 'react';
import { FaTh, FaThList } from 'react-icons/fa';
import { MdOutlineArrowDropDown } from 'react-icons/md';

import styles from './topBar.styles.module.css';
import Dropdown from '../dropdown/dropdown.component';
import ListDropdown from '../list-dropdown/listDropdown.component';

const sortOptions = [
    { id: 0, title: 'relevance' },
    { id: 1, title: 'name(A - Z)' },
    { id: 2, title: 'price(Low > High)' },
    { id: 3, title: 'rating(Lowest)' },
];

const TopBar = ({ from, to, amount }) => {
    const [chosenOption, setChosenOption] = useState(sortOptions[0].title);
    const [isOpened, setIsOpened] = useState(false);
    const [isToggled, setIsToggled] = useState(false);

    const handleOptionChange = option => {
        setChosenOption(option);
    };

    const handleClick = () => {
        setIsOpened(prevState => {
            return !prevState;
        });
    };

    return (
        <div className={styles.bar}>
            <div className={styles.bar__left}>
                <FaTh
                    className={`${!isToggled ? `${styles.chosen}` : ''}`}
                    onClick={() => setIsToggled(false)}
                />
                <FaThList
                    className={`${isToggled ? `${styles.chosen}` : ''}`}
                    onClick={() => setIsToggled(true)}
                />
                <span className={styles.bar__detail}>
                    Showing {from} to {to} of {amount}
                </span>
            </div>
            <div className={styles.bar__right}>
                Sort By:
                <div className={styles.bar__select}>
                    <div
                        className={`${styles.bar__chosen} ${
                            isOpened ? `${styles.opened}` : ''
                        }`}
                        onClick={handleClick}
                    >
                        <span className={styles.chosen}>{chosenOption}</span>
                        <MdOutlineArrowDropDown className={styles.arrow} />
                    </div>
                    {isOpened && (
                        <Dropdown>
                            <ListDropdown
                                list={sortOptions}
                                setElement={handleOptionChange}
                            />
                        </Dropdown>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopBar;
