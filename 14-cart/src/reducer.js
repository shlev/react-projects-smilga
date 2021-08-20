const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: removeItem(state.cart, action.payload),
      };
    case "INCREASE_AMOUNT":
      const incCart = increaseAmount(state.cart, action.payload);
      return {
        ...state,
        cart: incCart,
      };
    case "DECREASE_AMOUNT":
      const deCart = decreaseAmount(state.cart, action.payload);
      return {
        ...state,
        cart: deCart,
      };
    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        total,
        amount,
      };
    case "LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "DISPLAY_ITEMS":
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };
    default:
      throw new Error("no matching action type");
  }
};

const removeItem = (cart, id) => {
  return cart.filter((item) => item.id !== id);
};

const increaseAmount = (cart, id) => {
  return cart.map((item) => {
    if (item.id === id) return { ...item, amount: item.amount + 1 };
    return item;
  });
};

const decreaseAmount = (cart, id) => {
  return cart
    .map((item) => {
      if (item.id === id) return { ...item, amount: item.amount - 1 };
      return item;
    })
    .filter((item) => item.amount != 0);
};

export default reducer;
