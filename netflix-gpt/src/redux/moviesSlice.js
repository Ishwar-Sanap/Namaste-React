import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    removeNowPlayingMovies: (state) => {
      state.nowPlayingMovies = null;
    },
  },
});

export const { addNowPlayingMovies, removeNowPlayingMovies } =
  moviesSlice.actions;

export default moviesSlice.reducer;
