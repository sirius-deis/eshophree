import UserActionTypes from './user.types';

const INITIAL_STATE = {
    isLoading: false,
    user: null,
    error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_START:
        case UserActionTypes.SIGN_OUT_START:
        case UserActionTypes.SIGN_UP_START:
            return { ...state, isLoading: true };
        case UserActionTypes.SIGN_IN_SUCCESS:
            return { ...state, isLoading: false, user: action.payload };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return { ...state, isLoading: false, user: null };
        case UserActionTypes.SIGN_UP_SUCCESS:
            return { ...state, isLoading: false };
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export default userReducer;
