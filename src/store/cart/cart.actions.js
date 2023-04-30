import CartActionTypes from "./cart.types";

export const addItems = (items) => {
    return {
        type: CartActionTypes.FETCH_ITEMS,
        payload: items,
    };
};

export const clearCart = () => {
    return {
        type: CartActionTypes.CLEAR_CART,
    };
};
