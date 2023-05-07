import { MdStar, MdStarHalf, MdStarOutline } from 'react-icons/md';

import styles from './accordionStars.styles.module.css';

const AccordionStars = () => {
    return (
        <div className={styles.stars}>
            <div className={styles.row}>
                {Array(5)
                    .fill(null)
                    .map(_ => (
                        <MdStar />
                    ))}
                <span className={styles.text}>Stars only</span>
            </div>
            <div className={styles.row}>
                {Array(5)
                    .fill(null)
                    .map((_, i) => {
                        if (i < 4) return <MdStar />;
                        return <MdStarHalf />;
                    })}
                <span className={styles.text}>Stars only</span>
            </div>
            <div className={styles.row}>
                {Array(5)
                    .fill(null)
                    .map((_, i) => {
                        if (i < 4) return <MdStar />;
                        return <MdStarOutline />;
                    })}
                <span className={styles.text}>Stars only</span>
            </div>
        </div>
    );
};

export default AccordionStars;
