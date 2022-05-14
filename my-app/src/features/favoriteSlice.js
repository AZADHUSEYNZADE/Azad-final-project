import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  listfav: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    handleFavorite: (state, action) => {
      const isExist = state.favorites.every(
        (item) => item.id !== action.payload.id
      );
      if (!isExist) {
        state.favorites = state.favorites.filter(
          (item) => item.id !== action.payload.id
        );
      } else if (isExist) {
        state.favorites.push(action.payload);
      }
    },
    setList: (state, action) => {
      state.listfav.push(action.payload);
    },
  },
});

export const { handleFavorite, setList } = favoritesSlice.actions;
export const selectAllFavorites = (state) => state.favorites.favorites;
export default favoritesSlice.reducer;
