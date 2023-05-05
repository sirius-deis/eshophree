import { useSelector } from 'react-redux';

import styles from './products.styles.module.css';
import Accordion from '../../components/accordion/accordion.component';
import AccordionSelect from '../../components/accordion-select/accordionSelect.component';
import Slider from '../../components/slider/slider.component';

const Products = () => {
    const categoryList = useSelector(state => state.category.sections);
    return (
        <div className='container'>
            <div className={styles.products}>
                <div className={styles.products__left}>
                    <Accordion label='Category'>
                        <AccordionSelect list={categoryList} />
                    </Accordion>
                </div>
                <div className={styles.products__right}>
                    <Slider />
                </div>
            </div>
        </div>
    );
};

export default Products;
