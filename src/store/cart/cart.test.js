import cartReducer from './cart.reducer';
import CartActionTypes from './cart.types';

describe('cartReducer', () => {
  const INITIAL_CURT = [
    {
      id: 1,
      title: 'item1',
      price: 1,
      quantity: 2,
    },
    {
      id: 2,
      title: 'item2',
      price: 3,
      quantity: 1,
    },
    {
      id: 3,
      title: 'item3',
      price: 7,
      quantity: 4,
    },
  ];
  const INITIAL_SUM = INITIAL_CURT.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );
  const INITIAL_QUANTITY = INITIAL_CURT.reduce((acc, product) => acc * product.quantity, 0);
  const INITIAL_STATE = {
    cart: INITIAL_CURT,
    sum: INITIAL_SUM,
    quantity: INITIAL_QUANTITY,
  };
  it('should handle ADD_PRODUCTS_TO_CART', () => {
    const payload = [
      {
        id: 4,
        title: 'item4',
        price: 4,
        quantity: 3,
      },
      {
        id: 5,
        title: 'item5',
        price: 6,
        quantity: 3,
      },
    ];
    const sum = payload.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const quantity = payload.reduce((acc, product) => acc + product.quantity, 0);
    const result = cartReducer(INITIAL_STATE, {
      type: CartActionTypes.ADD_PRODUCTS_TO_CART,
      payload,
    });
    expect(result).toEqual({ cart: payload, sum, quantity });
  });

  it('should handle ADD_PRODUCT_TO_CART when such a product already exists in the cart', () => {
    const payload = {
      product: {
        id: 2,
        title: 'item2',
        price: 3,
      },
      quantity: 1,
    };
    const result = cartReducer(INITIAL_STATE, {
      type: CartActionTypes.ADD_PRODUCT_TO_CART,
      payload,
    });
    expect(result).toEqual({
      cart: [
        {
          id: 1,
          title: 'item1',
          price: 1,
          quantity: 2,
        },
        {
          id: 2,
          title: 'item2',
          price: 3,
          quantity: 2,
        },
        {
          id: 3,
          title: 'item3',
          price: 7,
          quantity: 4,
        },
      ],
      sum: INITIAL_SUM + payload.product.price * payload.quantity,
      quantity: INITIAL_QUANTITY + payload.quantity,
    });
  });

  it('should handle ADD_PRODUCT_TO_CART with multiple quantities when such a product already exists in the cart', () => {
    const payload = {
      product: {
        id: 2,
        title: 'item2',
        price: 3,
      },
      quantity: 3,
    };
    const result = cartReducer(INITIAL_STATE, {
      type: CartActionTypes.ADD_PRODUCT_TO_CART,
      payload,
    });
    expect(result).toEqual({
      cart: [
        {
          id: 1,
          title: 'item1',
          price: 1,
          quantity: 2,
        },
        {
          id: 2,
          title: 'item2',
          price: 3,
          quantity: 4,
        },
        {
          id: 3,
          title: 'item3',
          price: 7,
          quantity: 4,
        },
      ],
      sum: INITIAL_SUM + payload.product.price * payload.quantity,
      quantity: INITIAL_QUANTITY + payload.quantity,
    });
  });

  it('should handle ADD_PRODUCT_TO_CART when such a product is not exist in the cart', () => {
    const payload = {
      product: {
        id: 6,
        title: 'item6',
        price: 8,
      },
      quantity: 1,
    };
    const result = cartReducer(INITIAL_STATE, {
      type: CartActionTypes.ADD_PRODUCT_TO_CART,
      payload,
    });
    expect(result).toEqual({
      cart: [
        ...INITIAL_STATE.cart,
        {
          id: 6,
          title: 'item6',
          price: 8,
          quantity: 1,
        },
      ],
      sum: INITIAL_SUM + payload.product.price * payload.quantity,
      quantity: INITIAL_QUANTITY + payload.quantity,
    });
  });

  it('should handle ADD_PRODUCT_TO_CART with multiple quantities when such a product is not exist in the cart', () => {
    const payload = {
      product: {
        id: 6,
        title: 'item6',
        price: 8,
      },
      quantity: 4,
    };
    const result = cartReducer(INITIAL_STATE, {
      type: CartActionTypes.ADD_PRODUCT_TO_CART,
      payload,
    });
    expect(result).toEqual({
      cart: [
        ...INITIAL_STATE.cart,
        {
          id: 6,
          title: 'item6',
          price: 8,
          quantity: 4,
        },
      ],
      sum: INITIAL_SUM + payload.product.price * payload.quantity,
      quantity: INITIAL_QUANTITY + payload.quantity,
    });
  });

  it('should handle REMOVE_PRODUCT_FROM_CART when such a product already exists in the cart', () => {
    const payload = 1;
    const result = cartReducer(INITIAL_STATE, {
      type: CartActionTypes.REMOVE_PRODUCT_FROM_CART,
      payload,
    });
    expect(result).toEqual({
      cart: [
        {
          id: 1,
          title: 'item1',
          price: 1,
          quantity: 1,
        },
        {
          id: 2,
          title: 'item2',
          price: 3,
          quantity: 1,
        },
        {
          id: 3,
          title: 'item3',
          price: 7,
          quantity: 4,
        },
      ],
      sum: INITIAL_SUM - 1,
      quantity: INITIAL_QUANTITY - 1,
    });
  });

  it('should handle REMOVE_PRODUCT_FROM_CART when such a product is the last in the cart', () => {
    const payload = 2;
    const result = cartReducer(INITIAL_STATE, {
      type: CartActionTypes.REMOVE_PRODUCT_FROM_CART,
      payload,
    });
    expect(result).toEqual({
      cart: [
        {
          id: 1,
          title: 'item1',
          price: 1,
          quantity: 2,
        },
        {
          id: 3,
          title: 'item3',
          price: 7,
          quantity: 4,
        },
      ],
      sum: INITIAL_SUM - 3,
      quantity: INITIAL_QUANTITY - 1,
    });
  });

  it('should handle CLEAR_CART', () => {
    const result = cartReducer(INITIAL_STATE, {
      type: CartActionTypes.CLEAR_CART,
    });
    expect(result).toEqual({
      cart: [],
      sum: 0,
      quantity: 0,
    });
  });
});
