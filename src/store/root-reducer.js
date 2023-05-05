import { combineReducers } from 'redux';

import categoryReducer from './category/category.reducer';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import productReducer from './product/product.reducer';

const rootReducer = combineReducers({
    category: categoryReducer,
    user: userReducer,
    cart: cartReducer,
    product: productReducer,
});

export default rootReducer;
