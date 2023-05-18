import styles from './productList.styles.module.css';

import Slider from '../slider/slider.component';
import Product from '../product/product.component';
import useFetch from '../../hooks/useFetch';

const ProductList = () => {
    const [data, isLoading, error] = useFetch(
        'http://localhost:3000/api/v1/products?limit=10'
    );
    const productsToRender = data?.map(product => (
        <Product key={product._id} data={product} />
    ));
    return (
        <div className={styles.productList}>
            {isLoading && <Slider />}
            {!isLoading && !error && productsToRender}
        </div>
    );
};

export default ProductList;
