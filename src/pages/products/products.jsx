import { useSelector } from 'react-redux';

import styles from './products.styles.module.css';
import Accordion from '../../components/accordion/accordion.component';
import AccordionSelect from '../../components/accordion-select/accordionSelect.component';
import AccordionStars from '../../components/accordion-stars/accordionStars.component';
import AccordionPrice from '../../components/accordion-price/accordionPrice.component';
import Slider from '../../components/slider/slider.component';

const Products = () => {
    const categoryList = useSelector(state => state.category.sections);
    const tempSlides = [
        {
            url: '/images/slide-1.png',
            id: '1',
            header: 'Deals and Promotions',
            subheader: 'Beast by Dre Studio 3',
            regular: '$349.95',
            promotion: '$279.00',
        },
        {
            url: '/images/slide-1.png',
            id: '1',
            header: 'Deals and Promotions',
            subheader: 'Beast by Dre Studio 3',
            regular: '$349.95',
            promotion: '$279.00',
        },
        {
            url: '/images/slide-1.png',
            id: '1',
            header: 'Deals and Promotions',
            subheader: 'Beast by Dre Studio 3',
            regular: '$349.95',
            promotion: '$279.00',
        },
    ];
    return (
        <div className='container'>
            <div className={styles.products}>
                <div className={styles.products__left}>
                    <Accordion label='Category'>
                        <AccordionSelect list={categoryList} />
                    </Accordion>
                    <Accordion label='Stars'>
                        <AccordionStars />
                    </Accordion>
                    <Accordion label='Price'>
                        <AccordionPrice />
                    </Accordion>
                </div>
                <div className={styles.products__right}>
                    <Slider slides={tempSlides} />
                </div>
            </div>
        </div>
    );
};

export default Products;
