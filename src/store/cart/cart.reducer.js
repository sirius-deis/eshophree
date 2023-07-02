import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  cart: [],
  quantity: 0,
  sum: 0,
};

const copyStoreAndMergeWithProduct = (cart, product, quantity) => {
  const index = cart.findIndex((cartProduct) => cartProduct.id === product.id);
  let cartCopy = [];
  if (index !== -1) {
    const updatedProduct = {
      ...cart[index],
      quantity: cart[index].quantity + quantity,
    };
    cartCopy = [...cart.slice(0, index), { ...updatedProduct }, ...cart.slice(index + 1)];
  } else {
    cartCopy = [...cart, { ...product, quantity }];
  }
  return cartCopy;
};

const copyStoreAndMergeWithoutProduct = (cart, productId) => {
  const index = cart.findIndex((product) => product.id === productId);
  const price = cart[index].price;
  const quantity = cart[index].quantity;
  if (index === -1) {
    return cart;
  }
  let cartCopy = [];
  if (quantity > 1) {
    const updatedProduct = {
      ...cart[index],
      quantity: cart[index].quantity - 1,
    };
    cartCopy = [...cart.slice(0, index), updatedProduct, ...cart.slice(index + 1)];
  } else {
    cartCopy = [...cart.slice(0, index), ...cart.slice(index + 1)];
  }
  return [cartCopy, price];
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCTS_TO_CART:
      const sum = action.payload.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0,
      );
      const quantityOfAllProducts = action.payload.reduce(
        (acc, product) => acc + product.quantity,
        0,
      );
      return { ...state, cart: action.payload, sum, quantity: quantityOfAllProducts };
    case CartActionTypes.ADD_PRODUCT_TO_CART:
      const product = action.payload.product;
      const quantity = action.payload.quantity;
      const newCartAfterAddition = copyStoreAndMergeWithProduct(state.cart, product, quantity);
      return {
        ...state,
        cart: newCartAfterAddition,
        sum: state.sum + product.price * quantity,
        quantity,
      };
    case CartActionTypes.REMOVE_PRODUCT_FROM_CART:
      const productId = action.payload;
      const [newCartAfterDeletion, price] = copyStoreAndMergeWithoutProduct(state.cart, +productId);
      return {
        ...state,
        cart: newCartAfterDeletion,
        sum: state.sum - price,
        quantity: state.quantity - 1,
      };
    case CartActionTypes.CLEAR_CART:
      return { ...state, cart: [], sum: 0, quantity: 0 };
    default:
      return state;
  }
};

export default cartReducer;
