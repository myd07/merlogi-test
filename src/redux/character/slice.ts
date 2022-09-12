import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  collections: any[];
}

const initialState: CounterState = {
  collections: [],
};

export const counterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
});

export const characterActions = counterSlice.actions;

export default counterSlice.reducer;
