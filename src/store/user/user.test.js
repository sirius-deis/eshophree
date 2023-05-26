import userReducer from './user.reducer';
import UserActionTypes from './user.types';

describe('user reducer', () => {
    const INITIAL_STATE = {
        isLoading: false,
        user: null,
        error: null,
    };
    it('should handle SIGN_UP_START', () => {
        const result = userReducer(INITIAL_STATE, {
            type: UserActionTypes.SIGN_UP_START,
        });
        expect(result).toEqual({
            isLoading: true,
            user: null,
            error: null,
        });
    });
    it('should handle SIGN_IN_START', () => {
        const result = userReducer(INITIAL_STATE, {
            type: UserActionTypes.SIGN_IN_START,
        });
        expect(result).toEqual({
            isLoading: true,
            user: null,
            error: null,
        });
    });
    it('should handle SIGN_OUT_START', () => {
        const result = userReducer(INITIAL_STATE, {
            type: UserActionTypes.SIGN_OUT_START,
        });
        expect(result).toEqual({
            isLoading: true,
            user: null,
            error: null,
        });
    });

    it('should handle SIGN_UP_SUCCESS', () => {
        const result = userReducer(INITIAL_STATE, {
            type: UserActionTypes.SIGN_UP_SUCCESS,
        });
        expect(result).toEqual({
            isLoading: false,
            user: null,
            error: null,
        });
    });
    it('should handle SIGN_IN_SUCCESS', () => {
        const result = userReducer(INITIAL_STATE, {
            type: UserActionTypes.SIGN_IN_SUCCESS,
            payload: {
                email: 'test@test.com',
                name: 'name',
                surname: 'surname',
            },
        });
        expect(result).toEqual({
            isLoading: false,
            user: {
                email: 'test@test.com',
                name: 'name',
                surname: 'surname',
            },
            error: null,
        });
    });
    it('should handle SIGN_OUT_SUCCESS', () => {
        const result = userReducer(INITIAL_STATE, {
            type: UserActionTypes.SIGN_OUT_SUCCESS,
        });
        expect(result).toEqual({
            isLoading: false,
            user: null,
            error: null,
        });
    });

    it('should handle SIGN_UP_FAILURE', () => {
        const error = new Error();
        const result = userReducer(INITIAL_STATE, {
            type: UserActionTypes.SIGN_UP_FAILURE,
            payload: error,
        });
        expect(result).toEqual({
            isLoading: false,
            user: null,
            error,
        });
    });
    it('should handle SIGN_IN_FAILURE', () => {
        const error = new Error();
        const result = userReducer(INITIAL_STATE, {
            type: UserActionTypes.SIGN_IN_FAILURE,
            payload: error,
        });
        expect(result).toEqual({
            isLoading: false,
            user: null,
            error,
        });
    });
    it('should handle SIGN_OUT_FAILURE', () => {
        const error = new Error();
        const result = userReducer(INITIAL_STATE, {
            type: UserActionTypes.SIGN_OUT_FAILURE,
            payload: error,
        });
        expect(result).toEqual({
            isLoading: false,
            user: null,
            error,
        });
    });
});
