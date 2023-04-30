import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
    products: [],
    amount: 0,
    price: 0,
};

const calculateAmount = (products) => {
    return products.reduce((acc, product) => (acc += product.quantity), 0);
};

const calculatePrice = (products) => {
    return products.reduce((acc, product) => (acc += product.productId.price), 0);
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.FETCH_ITEMS:
            const products = action.payload;
            return { products: products, amount: calculateAmount(products), price: calculatePrice(products) };
        case CartActionTypes.CLEAR_CART:
            return {};
        default:
            return state;
    }
};

export default cartReducer;
