import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
  status: "idle",
};
export const cardSlice = createSlice({
  name: "counter",
  initialState,
  message: "",
  starship: {},
  computerChoice: {},

  reducers: {
    setStarship: (state, { payload }) => {
      state.starship = payload;
    },

    setComputerChoice: (state, { payload }) => {
      state.computerChoice = payload;
    },

    setMessage: (state, { payload }) => {
      console.log(payload)
      state.message = payload;
    },
  },
});

export const { setStarship, setComputerChoice, setMessage } = cardSlice.actions;

export const selectStarship = (state) => state.card.starship;
export const selectComputerChoice = (state) => state.card.computerChoice;
export const selectMessage = (state) => state.card.message;
export default cardSlice.reducer;
