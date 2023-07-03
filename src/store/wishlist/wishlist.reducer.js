import WishListTypes from './wishlist.types';

const INITIAL_STATE = {
  products: [],
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WishListTypes.ADD_PRODUCTS_TO_WISHLIST:
      return { ...state, products: action.payload };
    case WishListTypes.ADD_PRODUCT_TO_WISHLIST:
      return { ...state, products: [...state.products, action.payload] };
    case WishListTypes.REMOVE_PRODUCT_FROM_WISHLIST:
      return {
        ...state,
        products: state.products.filter((product) => product._id !== action.payload),
      };
    case WishListTypes.CLEAR_WISHLIST:
      return { ...state, products: [] };
    default:
      return state;
  }
};

export default wishlistReducer;
