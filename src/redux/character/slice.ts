import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface State {
  collections: any[];
}

const initialState: State = {
  collections: [],
};

export const slice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCollections: (state, action: PayloadAction<any[]>) => {
      state.collections = action.payload;
    },
  },
});

export const characterActions = slice.actions;

export default slice.reducer;
