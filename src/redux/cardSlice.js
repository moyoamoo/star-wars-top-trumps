import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
  status: "idle",
  turnPlayed: false,
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
      console.log(payload);
      state.message = payload;
    },

    setTurnPlayed: (state, { payload }) => {
      state.turnPlayed = payload;
    },
  },
});

export const { setStarship, setComputerChoice, setMessage, setTurnPlayed } =
  cardSlice.actions;

export const selectStarship = (state) => state.card.starship;
export const selectComputerChoice = (state) => state.card.computerChoice;
export const selectMessage = (state) => state.card.message;
export const selectTurnPlayed = (state) => state.card.turnPlayed;
export default cardSlice.reducer;
