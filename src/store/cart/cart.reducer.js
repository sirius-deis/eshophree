import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
    products: [],
    amount: 0,
    price: 0,
};

const calculateAmount = (products) => {
    return;
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.FETCH_ITEMS:
            //TODO:
            return { products: action.payload };
        default:
            return state;
    }
};

export default cartReducer;
