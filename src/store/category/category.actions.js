import CategoryActionTypes from './category.types';

export const addCategoriesToStore = categories => {
    return {
        type: CategoryActionTypes.ADD_CATEGORIES,
        payload: categories,
    };
};
