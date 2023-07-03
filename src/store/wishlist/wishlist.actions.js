import WishListTypes from './wishlist.types';

export const addProductsToWishlist = (products) => {
  return {
    type: WishListTypes.ADD_PRODUCTS_TO_WISHLIST,
    payload: products,
  };
};

export const addProductToWishlist = (product) => {
  return {
    type: WishListTypes.ADD_PRODUCT_TO_WISHLIST,
    payload: product,
  };
};

export const removeProductFormWishlist = (productId) => {
  return {
    type: WishListTypes.REMOVE_PRODUCT_FROM_WISHLIST,
    payload: productId,
  };
};

export const clearWishlist = () => {
  return {
    type: WishListTypes.CLEAR_WISHLIST,
  };
};
