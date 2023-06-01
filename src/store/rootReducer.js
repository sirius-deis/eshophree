import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import categoryReducer from './category/category.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
});

export default rootReducer;
