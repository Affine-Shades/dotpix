import { createSlice } from "@reduxjs/toolkit";

export interface SizeState {
  value: number;
}

const initialState: SizeState = {
  value: 12,
};

export const sizeSlice = createSlice({
  name: "size",
  initialState,
  reducers: {
    incrementSize: (state) => {
      state.value += 8;
    },
    decrementSize: (state) => {
      state.value -= 8;
    },
  },
});

export const { incrementSize, decrementSize } = sizeSlice.actions;

export default sizeSlice.reducer;
