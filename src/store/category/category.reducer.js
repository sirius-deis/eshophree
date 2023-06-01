import CategoryActionTypes from './category.types';

const INITIAL_STATE = {
  categories: [],
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryActionTypes.ADD_CATEGORIES:
      const categories = action.payload.productCategory;
      return { ...state, categories };
    default:
      return state;
  }
};

export default categoryReducer;
