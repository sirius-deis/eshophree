import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import categoryReducer from './category/category.reducer';
import cartReducer from './cart/cart.reducer';
import wishlistReducer from './wishlist/wishlist.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;
