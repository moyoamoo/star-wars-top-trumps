import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
  status: "idle",
};
export const cardSlice = createSlice({
  name: "counter",
  initialState,
  starship: {},
  computerChoice: {},
  reducers: {
    setStarship: (state, { payload }) => {
      state.starship = payload;
    },

    setComputerChoice: (state, { payload }) => {
      state.computerChoice = payload;
    },
  },
});

export const { setStarship, setComputerChoice } = cardSlice.actions;

export const selectStarship = (state) => state.card.starship;
export const selectComputerChoice = (state) => state.card.computerChoice;
export default cardSlice.reducer;
