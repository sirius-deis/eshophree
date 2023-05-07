import PropTypes from 'prop-types';
import ReactSlider from 'react-slider';
import styles from './accordionPrice.styles.module.css';

const AccordionPrice = ({ priceRange, setRange, min, max }) => {
    const handleSliderChange = value => {
        setRange(value);
    };
    return (
        <div className={styles.price}>
            <div className='price__title'>
                Price range: ${priceRange[0]} - ${priceRange[1]}
            </div>
            <div className={styles['range-slider']}>
                <ReactSlider
                    className='horizontal-slider'
                    thumbClassName={styles.thumb}
                    trackClassName={styles.track}
                    min={min}
                    max={max}
                    defaultValue={[priceRange[0], priceRange[1]]}
                    ariaLabel={[
                        'Leftmost thumb',
                        'Middle thumb',
                        'Rightmost thumb',
                    ]}
                    onChange={handleSliderChange}
                    pearling
                />
            </div>
        </div>
    );
};

AccordionPrice.propTypes = {
    priceRange: PropTypes.array,
    setRange: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
};

export default AccordionPrice;
