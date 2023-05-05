import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './slider.styles.module.css';
import Button from '../button/button.component';

const Slider = ({ slides = [] }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const onArrowClickHandler = n => {
        setCurrentSlide(prevState => {
            if (currentSlide + n > slides.length - 1) {
                return 0;
            }
            if (currentSlide + n < 0) {
                return slides.length - 1;
            }
            return prevState + n;
        });
    };
    const onDotClickHandler = n => {
        setCurrentSlide(n);
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentSlide + 1 > slides.length - 1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(prevState => prevState + 1);
            }
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentSlide]);
    return (
        <div className={styles.slider}>
            <div
                className={styles.slider__container}
                style={{ transform: `translateX(-${100 * currentSlide}%)` }}
            >
                {slides.map((slide, i) => (
                    <div
                        className={styles.slider__slide}
                        style={{
                            backgroundImage: `url(${slide.url})`,
                            backgroundPositionX: '35%',
                            backgroundSize: 'cover',
                        }}
                        key={i}
                    >
                        <div className={styles.slider__wrapper}>
                            <div className={styles.slider__header}>
                                {slide.header}
                            </div>
                            <div className={styles.slider__subheader}>
                                {slide.subheader}
                            </div>
                            <div className={styles.slider__price}>
                                <div className={styles.slider__regular}>
                                    {slide.regular}
                                </div>
                                <div className={styles.slider__promotion}>
                                    {slide.promotion}
                                </div>
                            </div>
                            <Button color='blue'>
                                <Link to={`/shop/${slide.id}`}>Buy now</Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <div
                className={`${styles.slider__arrow} ${styles['slider__arrow-left']}`}
                onClick={onArrowClickHandler.bind(null, -1)}
            >
                &#8249;
            </div>
            <div
                className={`${styles.slider__arrow} ${styles['slider__arrow-right']}`}
                onClick={onArrowClickHandler.bind(null, 1)}
            >
                &#8250;
            </div>
            <div className={styles.slider__dots}>
                {slides.map((_, i) => (
                    <div
                        className={`${styles.slider__dot} ${
                            currentSlide === i ? `${styles.active}` : ''
                        }`}
                        key={i}
                        onClick={onDotClickHandler.bind(null, i)}
                    >
                        &nbsp;
                    </div>
                ))}
            </div>
        </div>
    );
};

Slider.propTypes = {
    slides: PropTypes.array,
};

export default Slider;
