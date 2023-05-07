import { useState } from 'react';
import ReactSlider from 'react-slider';
import styles from './accordionPrice.styles.module.css';

const AccordionPrice = () => {
    const minPrice = useState(0);
    const maxPrice = useState(1000);
    return (
        <div className={styles.price}>
            <div className='price__title'>Price range: $100 - $1000</div>
            <div className={styles['range-slider']}>
                <ReactSlider
                    className='horizontal-slider'
                    thumbClassName={styles.thumb}
                    trackClassName={styles.track}
                    defaultValue={[0, 1000]}
                    ariaLabel={[
                        'Leftmost thumb',
                        'Middle thumb',
                        'Rightmost thumb',
                    ]}
                    pearling
                />
            </div>
        </div>
    );
};

export default AccordionPrice;
