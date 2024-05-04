import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./redux/counterSlice";
import "./css/App.css";
import { getCharacter } from "./starshipApiRequest";

export default function App() {
  return (
    <>
      <button
        onClick={() => {
          getCharacter();
        }}
      >
        Get Character
      </button>
    </>
  );
}
