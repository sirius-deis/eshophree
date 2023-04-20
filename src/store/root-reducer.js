import { combineReducers } from "redux";

import categoryReducer from "./category/category.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
    category: categoryReducer,
    user: userReducer,
});

export default rootReducer;
