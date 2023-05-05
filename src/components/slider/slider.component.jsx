import PropTypes from 'prop-types';

import styles from './slider.styles.module.css';

const Slider = ({ slides = [] }) => {
    return (
        <div className={styles.slider}>
            <div className={styles.slider__container}>
                <div className={styles.slider__slide}></div>
            </div>
            <div
                className={`${styles.slider__arrow} ${styles['slider__arrow-left']}`}
            >
                &#8249;
            </div>
            <div
                className={`${styles.slider__arrow} ${styles['slider__arrow-right']}`}
            >
                &#8250;
            </div>
            <div className={styles.slider__dots}>
                <div className={styles.slider__dot}></div>
            </div>
        </div>
    );
};

Slider.propTypes = {
    slides: PropTypes.array,
};

export default Slider;
