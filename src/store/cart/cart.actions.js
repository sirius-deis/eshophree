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

export const addItem = (item) => {
    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item,
    };
};

export const removeItem = (id) => {
    return {
        type: CartActionTypes.REMOVE_ITEM,
        payload: id,
    };
};

export const clearItem = (id) => {
    return {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: id,
    };
};
