import { Link } from "react-router-dom";

import styles from "./cartDropdown.styles.module.css";

import ProductsList from "../products-list/productsList.component";
import Button from "../button/button.component";

const CartDropdown = ({ products, price }) => {
    if (products.length < 1) {
        return (
            <div className={styles.cart}>
                <div className={styles.cart__heading}>Your cart is empty</div>
                <Button>
                    <Link to="/products">Go to products</Link>
                </Button>
            </div>
        );
    }
    return (
        <div className={styles.cart}>
            <div className={styles.cart__container}>
                <ProductsList products={products} />
            </div>
            <div className={styles.cart__info}>
                <span>subtotal</span>
                <span>£{price.toFixed(2)}</span>
            </div>
            <div className={styles.cart__btn}>
                <Button color="dark">
                    <Link to="/cart">view full cart</Link>
                </Button>
                <Button color="yellow">
                    <Link to="/checkout">checkout</Link>
                </Button>
            </div>
        </div>
    );
};

export default CartDropdown;
