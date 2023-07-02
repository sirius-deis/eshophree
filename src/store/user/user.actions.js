import UserActionTypes from './user.types';
import fetchData from '../../utils/fetchData';

export const signIn = (dataForServer) => async (dispatch) => {
  dispatch({ type: UserActionTypes.SIGN_IN_START });
  try {
    const data = await fetchData('users/login', {
      method: 'POST',
      body: JSON.stringify(dataForServer),
    });
    dispatch({ type: UserActionTypes.SIGN_IN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UserActionTypes.SIGN_IN_FAILURE,
      payload: error,
    });
  }
};

export const signUp = (dataForServer) => async (dispatch) => {
  dispatch({ type: UserActionTypes.SIGN_UP_START });
  try {
    const data = await fetchData('users/signup', {
      method: 'POST',
      body: JSON.stringify(dataForServer),
    });
    dispatch({ type: UserActionTypes.SIGN_UP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UserActionTypes.SIGN_UP_FAILURE, payload: error });
  }
};

export const signOut = async (dispatch) => {
  dispatch({ type: UserActionTypes.SIGN_OUT_START });
  try {
    await fetch('users/logout');
    dispatch({ type: UserActionTypes.SIGN_OUT_SUCCESS });
  } catch (error) {
    dispatch({ type: UserActionTypes.SIGN_OUT_FAILURE, payload: error });
  }
};

export const addToRecentlyViewed = (product) => {
  return {
    type: UserActionTypes.ADD_TO_RECENTLY_VIEWED,
    payload: product,
  };
};

export const deleteFromRecentlyViewed = (productId) => {
  return {
    type: UserActionTypes.DELETE_FROM_RECENTLY_VIEWED,
    payload: productId,
  };
};

export const clearRecentlyViewed = () => {
  return {
    type: UserActionTypes.CLEAR_RECENTLY_VIEWED,
  };
};
