import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
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
        console.log("includes", action.payload);
        state.favorites = state.favorites.filter(
          (item) => item.id !== action.payload.id
        );
      } else if (isExist) {
        state.favorites.push(action.payload);
        console.log("!includes", "hiiiiiiiiiiiiiiiiiiiiiiiii");
      }
    },
  },
});

export const { handleFavorite } = favoritesSlice.actions;
export const selectAllFavorites = (state) => state.favorites.favorites;
export default favoritesSlice.reducer;
