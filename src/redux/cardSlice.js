import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
  status: "idle",
};
export const cardSlice = createSlice({
  name: "counter",
  initialState,
  starship: {},
  reducers: {
    setStarship: (state, { payload }) => {
      state.starship = payload;
    },
  },
});

export const { setStarship } = cardSlice.actions;

export const selectStarship = (state) => state.card.starship;

export default cardSlice.reducer;
