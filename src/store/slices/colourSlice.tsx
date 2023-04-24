import { createSlice } from "@reduxjs/toolkit";
import { colours } from "../../utils/colourUtil";

export interface ColourState {
  colourIndex: number;
  shadeIndex: number;
  currentColour: string;
  currentShade: string;
}

const initialState: ColourState = {
  colourIndex: 0,
  shadeIndex: 0,
  currentColour: colours[0].colour,
  currentShade: colours[0].shades[0],
};

export const colourSlice = createSlice({
  name: "colour",
  initialState,
  reducers: {
    switchColour: (state) => {
      state.colourIndex = (state.colourIndex + 1) % colours.length;
      state.currentColour = colours[state.colourIndex].colour;
      state.currentShade = colours[state.colourIndex].shades[state.shadeIndex];
    },
    increaseShade: (state) => {
      state.shadeIndex =
        (state.shadeIndex + 1) % colours[state.colourIndex].shades.length;
      state.currentShade = colours[state.colourIndex].shades[state.shadeIndex];
    },
    decreaseShade: (state) => {
      state.shadeIndex =
        (state.shadeIndex - 1 + colours[state.colourIndex].shades.length) %
        colours[state.colourIndex].shades.length;
      state.currentShade = colours[state.colourIndex].shades[state.shadeIndex];
    },
  },
});

export const { switchColour, increaseShade, decreaseShade } =
  colourSlice.actions;

export default colourSlice.reducer;
