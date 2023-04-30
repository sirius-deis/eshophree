import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
    products: [],
    amount: 0,
    price: 0,
};

const calculateAmount = (products) => {
    return products.reduce((acc, productArr) => (acc += productArr.quantity), 0);
};

const calculatePrice = (products) => {
    return products.reduce((acc, productArr) => (acc += productArr.product.price * productArr.quantity), 0);
};

const addProductToCart = (productsInCart, product) => {
    const index = productsInCart.findIndex((productInCart) => productInCart.product._id === product._id);
    if (index === -1) {
        return [...productsInCart, product];
    } else {
        const updatedProduct = JSON.parse(JSON.stringify(productsInCart[index]));
        updatedProduct.quantity += 1;
        return [...productsInCart.slice(0, index), updatedProduct, ...productsInCart.slice(index + 1)];
    }
};

const removeProductFromCart = (productsInCart, productId) => {
    const index = productsInCart.findIndex((productInCart) => productInCart.product._id === productId);
    if (productsInCart[index].quantity === 1) {
        return clearProductFormCart(productsInCart, productId);
    } else {
        const updatedProduct = JSON.parse(JSON.stringify(productsInCart[index]));
        updatedProduct.quantity -= 1;
        return [...productsInCart.slice(0, index), updatedProduct, ...productsInCart.slice(index + 1)];
    }
};

const clearProductFormCart = (productsInCart, productId) => {
    const index = productsInCart.findIndex((productInCart) => productInCart.product._id === productId);
    return [...productsInCart.slice(0, index), ...productsInCart.slice(index + 1)];
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.FETCH_ITEMS:
            const products = action.payload.map((item) => ({ product: item.productId, quantity: item.quantity }));
            return {
                ...state,
                products: products,
                amount: calculateAmount(products),
                price: calculatePrice(products),
            };
        case CartActionTypes.ADD_ITEM:
            const productsArrWithAddedItem = addProductToCart(state.products, action.payload);
            return {
                ...state,
                products: productsArrWithAddedItem,
                amount: calculateAmount(productsArrWithAddedItem),
                price: calculatePrice(productsArrWithAddedItem),
            };
        case CartActionTypes.REMOVE_ITEM:
            const productsArrWithRemovedProduct = removeProductFromCart(state.products, action.payload);
            return {
                ...state,
                products: productsArrWithRemovedProduct,
                amount: calculateAmount(productsArrWithRemovedProduct),
                price: calculatePrice(productsArrWithRemovedProduct),
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            const productsArrWithClearedProduct = clearProductFormCart(state.products, action.payload);
            return {
                ...state,
                products: productsArrWithClearedProduct,
                amount: calculateAmount(productsArrWithClearedProduct),
                price: calculatePrice(productsArrWithClearedProduct),
            };
        case CartActionTypes.CLEAR_CART:
            return {};
        default:
            return state;
    }
};

export default cartReducer;
