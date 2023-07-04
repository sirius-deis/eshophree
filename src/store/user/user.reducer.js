import UserActionTypes from './user.types';

const INITIAL_STATE = {
  isLoading: false,
  user: null,
  error: null,
  token: null,
  recentlyViewed: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_START:
    case UserActionTypes.SIGN_OUT_START:
    case UserActionTypes.SIGN_UP_START:
      return { ...state, isLoading: true };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.data.user,
        error: null,
        token: action.payload.token,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return { ...state, isLoading: false, user: null, error: null, token: null };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return { ...state, isLoading: false, error: null };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return { ...state, user: null, token: null, isLoading: false, error: action.payload.message };
    case UserActionTypes.ADD_TO_RECENTLY_VIEWED:
      const product = {
        id: action.payload._id,
        image: action.payload.image,
        category: action.payload.category,
        name: action.payload.name,
        price: action.payload.price,
        discount: action.payload.discount,
      };
      const recentlyViewedWithNewItem = [...state.recentlyViewed];
      if (recentlyViewedWithNewItem.length >= 20) {
        recentlyViewedWithNewItem.pop();
      }
      recentlyViewedWithNewItem.push(product);
      return { ...state, recentlyViewed: recentlyViewedWithNewItem };
    case UserActionTypes.DELETE_FROM_RECENTLY_VIEWED:
      const recentlyViewedWithoutItem = state.recentlyViewed.filter(
        (item) => item.id !== action.payload,
      );
      return { ...state, recentlyViewed: recentlyViewedWithoutItem };
    case UserActionTypes.CLEAR_RECENTLY_VIEWED:
      return { ...state, recentlyViewed: [] };
    default:
      return state;
  }
};

export default userReducer;
