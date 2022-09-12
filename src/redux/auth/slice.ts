import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface State {
  isLoggedin: boolean;
}

const initialState: State = {
  isLoggedin: false,
};

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedin = true;
    },
    logout: (state) => {
      state.isLoggedin = false;
    },
  },
});

export const authActions = slice.actions;

export default slice.reducer;
