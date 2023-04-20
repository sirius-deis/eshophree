import UserActionTypes from "./user.types";

export const signIn = (user) => {
    return {
        type: UserActionTypes.SIGN_IN,
        payload: user,
    };
};

export const signOut = () => {
    return {
        type: UserActionTypes.SIGN_OUT,
    };
};
