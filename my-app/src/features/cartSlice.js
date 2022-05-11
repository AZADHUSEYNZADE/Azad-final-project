import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  status: "idle",
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      let a = state.cart.every((item) => {
        return item.product.id !== action.payload.product.id;
      });
      if (a) {
        state.cart.push(action.payload);
      } else {
        state.cart.map((elem) => (elem.count += action.payload.count));
      }
    },
    incrementCount(state, action) {
      const updatedCart = state.cart.map((cartItem) => {
        if (cartItem.product.id === action.payload.productId) {
          return { ...cartItem, count: cartItem.count + 1 };
        }
        return cartItem;
      });
      state.cart = updatedCart;
    },
    decrementCount(state, action) {
      const updatedCart = state.cart.map((cartItem) => {
        if (
          cartItem.product.id === action.payload.productId &&
          cartItem.count > 0
        ) {
          return { ...cartItem, count: cartItem.count - 1 };
        }
        return cartItem;
      });
      state.cart = updatedCart;
    },
    deleteItem(state, action) {
      let a = state.cart.filter(
        (cartItem) => cartItem.product.id !== action.payload
      );

      state.cart = a;
    },
  },
});

export const {
  addToCart,
  incrementCount,
  decrementCount,
  deleteItem,
  addFavorite,
} = cartSlice.actions;
export const selectCart = (state) => state.cart.cart;
export default cartSlice.reducer;
