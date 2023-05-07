import PropTypes from 'prop-types';
import { MdStar, MdStarHalf, MdStarOutline } from 'react-icons/md';

import styles from './accordionStars.styles.module.css';

const AccordionStars = ({ stars, setStars }) => {
    return (
        <div className={styles.stars}>
            <div
                className={`${styles.row} ${
                    stars === 5 ? `${styles.chosen}` : ''
                }`}
                onClick={() => setStars(5)}
            >
                {Array(5)
                    .fill(null)
                    .map((_, i) => (
                        <MdStar key={i} />
                    ))}
                <span className={styles.text}>Stars only</span>
            </div>
            <div
                className={`${styles.row} ${
                    stars === 4.5 ? `${styles.chosen}` : ''
                }`}
                onClick={() => setStars(4.5)}
            >
                {Array(5)
                    .fill(null)
                    .map((_, i) => {
                        if (i < 4) return <MdStar key={i} />;
                        return <MdStarHalf key={i} />;
                    })}
                <span className={styles.text}>Stars only</span>
            </div>
            <div
                className={`${styles.row} ${
                    stars === 4 ? `${styles.chosen}` : ''
                }`}
                onClick={() => setStars(4)}
            >
                {Array(5)
                    .fill(null)
                    .map((_, i) => {
                        if (i < 4) return <MdStar key={i} />;
                        return <MdStarOutline key={i} />;
                    })}
                <span className={styles.text}>Stars only</span>
            </div>
            <div
                className={`${styles.row} ${
                    stars === 0 ? `${styles.chosen}` : ''
                }`}
                onClick={() => setStars(0)}
            >
                All
            </div>
        </div>
    );
};

AccordionStars.propTypes = {
    stars: PropTypes.number,
    setStars: PropTypes.func,
};

export default AccordionStars;
