import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
// import rootReducer from "./reducers";
import cartReducer from "./features/cartSlice";
import favoriteReducer from "./features/favoriteSlice";

const reducers = combineReducers({
  cart: cartReducer,
  favorites: favoriteReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "favorites"],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});
