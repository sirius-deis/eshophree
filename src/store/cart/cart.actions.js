import CartActionTypes from './cart.types';

export const addProducts = products => {
    return {
        type: CartActionTypes.ADD_PRODUCTS_TO_CART,
        payload: products,
    };
};

export const addProduct = (product, quantity = 1) => {
    return {
        type: CartActionTypes.ADD_PRODUCT_TO_CART,
        payload: { product, quantity },
    };
};

export const removeProduct = productId => {
    return {
        type: CartActionTypes.REMOVE_PRODUCT_FROM_CART,
        payload: productId,
    };
};

export const clearCart = () => {
    return {
        type: CartActionTypes.CLEAR_CART,
    };
};
