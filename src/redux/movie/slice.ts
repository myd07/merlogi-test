import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Movie } from "src/domains/movie";

interface State {
  collection: Movie[];
}

const initialState: State = {
  collection: [],
};

export const slice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setCollection: (state, action: PayloadAction<Movie[]>) => {
      state.collection = action.payload;
    },
  },
});

export const movieActions = slice.actions;

export default slice.reducer;
