import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Character } from "src/domains/character";

interface State {
  collection: Character[];
}

const initialState: State = {
  collection: [],
};

export const slice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCollection: (state, action: PayloadAction<Character[]>) => {
      state.collection = action.payload;
    },
    setCollectionFromId: (
      state,
      action: PayloadAction<Character> & PayloadAction<Character[]>
    ) => {
      if (action.payload.length > 0) {
        state.collection = action.payload;
      } else {
        state.collection = [...state.collection, action.payload];
      }
    },
  },
});

export const characterActions = slice.actions;

export default slice.reducer;
