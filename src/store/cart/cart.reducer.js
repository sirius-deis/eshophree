import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
    products: [],
    amount: 0,
    price: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM:
            //TODO:
            return {};
        default:
            return state;
    }
};

export default cartReducer;
