import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
  status: "idle",
  turnPlayed: false,
  win: 0,
  lose: 0,
  draw: 0,
  turn: 0,
  computerChoice: {},
  window: null,
};
export const cardSlice = createSlice({
  name: "counter",
  initialState,
  message: "",
  starship: {},

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

    setWin: (state, { payload }) => {
      state.win += payload;
    },

    setDraw: (state, { payload }) => {
      state.draw += payload;
    },

    setLose: (state, { payload }) => {
      state.lose += payload;
    },

    setTurn: (state, { payload }) => {
      state.turn += payload;
    },

    setWindow: (state, { payload }) => {
      state.window = payload;
    },
  },
});

export const {
  setStarship,
  setComputerChoice,
  setMessage,
  setTurnPlayed,
  setDraw,
  setLose,
  setWin,
  setTurn,
  setWindow,
} = cardSlice.actions;

export const selectStarship = (state) => state.card.starship;
export const selectComputerChoice = (state) => state.card.computerChoice;
export const selectMessage = (state) => state.card.message;
export const selectTurnPlayed = (state) => state.card.turnPlayed;
export const selectWin = (state) => state.card.win;
export const selectLose = (state) => state.card.lose;
export const selectDraw = (state) => state.card.draw;
export const selectTurn = (state) => state.card.turn;
export const selectWindow = (state) => state.card.window;

export default cardSlice.reducer;
