import ProductActionTypes from './product.types';

export const addProducts = products => {
    return {
        action: ProductActionTypes.ADD_PRODUCTS,
        payload: products,
    };
};
