import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MdStarOutline, MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';

import styles from './product.styles.module.css';

import Button from '../button/button.component';

const Product = ({ data }) => {
    return (
        <article className={styles.product}>
            <div className={styles.product__top}>
                <div className={styles.product__discount}></div>
                {data.isNew && <div className={styles.product__new}>new</div>}
            </div>
            <div className={styles.imgContainer}>
                <img
                    src={`http://localhost:3000/images/${data.images[0]}`}
                    alt='product'
                    className={styles.product__img}
                />
            </div>
            <div className={styles.product__rating}>
                {Array(5)
                    .fill(null)
                    .map((_, i) => {
                        if (data.rating === undefined) {
                            return (
                                <MdStarOutline
                                    key={i}
                                    className={styles.star}
                                />
                            );
                        } else if (i < data.rating) {
                            return (
                                <MdStarOutline
                                    key={i}
                                    className={`${styles.star} ${styles['star--marked']}`}
                                />
                            );
                        } else {
                            return (
                                <MdStarOutline
                                    key={i}
                                    className={styles.star}
                                />
                            );
                        }
                    })}
            </div>
            <Link to={`/shop/${data._id}`} className={styles.product__name}>
                {data.name}
            </Link>
            <div className={styles.product__bottom}>
                <p className={styles.product__price}>{`$${data.price.toFixed(
                    2
                )}`}</p>
                <div className={styles.product__right}>
                    <MdOutlineRemoveRedEye />
                    <FaRegHeart />
                    <Button size='small' color='yellow'>
                        Add to cart
                    </Button>
                </div>
            </div>
        </article>
    );
};

Product.propTypes = {
    data: PropTypes.object,
};

export default Product;
