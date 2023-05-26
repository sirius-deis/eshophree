import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    cart: [],
};

const copyStoreAndMergeWithProduct = (cart, product, quantity) => {
    const index = cart.findIndex(cartProduct => cartProduct.id === product.id);
    let copyCart = [];
    if (index !== -1) {
        const updatedProduct = {
            ...cart[index],
            quantity: cart[index].quantity + quantity,
        };
        copyCart = [
            ...cart.slice(0, index),
            { ...updatedProduct },
            ...cart.slice(index + 1),
        ];
    } else {
        copyCart = [...cart, { ...product, quantity }];
    }
    return copyCart;
};

const copyStoreAndMergeWithoutProduct = (cart, productId) => {
    const index = cart.findIndex(product => product.id === productId);
    const quantity = cart[index].quantity;
    if (index === -1) {
        return cart;
    }
    let copyCart = [];
    if (quantity > 1) {
        const updatedProduct = {
            ...cart[index],
            quantity: cart[index].quantity - 1,
        };
        copyCart = [
            ...cart.slice(0, index),
            updatedProduct,
            ...cart.slice(index + 1),
        ];
    } else {
        copyCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
    }
    return copyCart;
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCTS_TO_CART:
            return { ...state, cart: action.payload };
        case CartActionTypes.ADD_PRODUCT_TO_CART:
            const product = action.payload.product;
            const quantity = action.payload.quantity;
            const newCartAfterAddition = copyStoreAndMergeWithProduct(
                state.cart,
                product,
                quantity
            );
            return { ...state, cart: newCartAfterAddition };
        case CartActionTypes.REMOVE_PRODUCT_FROM_CART:
            const productId = action.payload;
            const newCartAfterDeletion = copyStoreAndMergeWithoutProduct(
                state.cart,
                +productId
            );
            return { ...state, cart: newCartAfterDeletion };
        case CartActionTypes.CLEAR_CART:
            return { ...state, cart: [] };
        default:
            return state;
    }
};

export default cartReducer;
