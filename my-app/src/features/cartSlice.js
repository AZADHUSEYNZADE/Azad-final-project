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
      state.cart.push(action.payload);
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
        if (cartItem.product.id === action.payload.productId) {
          return { ...cartItem, count: cartItem.count - 1 };
        }
        return cartItem;
      });
      state.cart = updatedCart;
    },
    deleteItem(state, action) {
      const updatedCart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.productId
      );
      state.cart = updatedCart;
    },
  },
});

export const { addToCart, incrementCount, decrementCount, deleteItem } =
  cartSlice.actions;
export const selectCart = (state) => state.cart.cart;
export default cartSlice.reducer;
