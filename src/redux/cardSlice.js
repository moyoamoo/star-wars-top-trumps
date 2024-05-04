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

export const selectCount = (state) => state.counter.value;

export default cardSlice.reducer;
