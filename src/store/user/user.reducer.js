import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    isLoggedIn: false,
    currentUser: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN:
            return { ...state, isLoggedIn: true, currentUser: action.payload };
        case UserActionTypes.SIGN_OUT:
            return { ...state, isLoggedIn: false, currentUser: null };
        default:
            return state;
    }
};

export default userReducer;
