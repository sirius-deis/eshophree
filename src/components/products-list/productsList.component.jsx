import styles from "./productsList.styles.module.css";

const ProductsList = ({ products }) => {
    const listToRender = products.map((product) => {
        const { productId } = product;
        return (
            <li className={styles.product__item} key={productId._id}>
                <img src={`http://localhost:3000/${productId.images[0]}`} width={40} height={40} alt={productId.name} />
                <div className={styles.product__center}>
                    <div className={styles.product__name}>{productId.name}</div>
                    <div className={styles.product__detail}>
                        <span className={styles.product__price}>£{productId.price.toFixed(2)}</span> x
                        <span className={styles.product__quantity}>{product.quantity}</span>
                    </div>
                </div>
                <button className={styles.product__close}>&#215;</button>
            </li>
        );
    });
    return <ul className={styles.product__list}>{listToRender}</ul>;
};

export default ProductsList;
