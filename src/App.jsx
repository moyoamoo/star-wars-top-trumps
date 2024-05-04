import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./css/App.css";
import { getCharacter } from "./starshipApiRequest";
import { selectStarship } from "./redux/cardSlice";

export default function App() {
  const starship = useSelector(selectStarship);
  return (
    <>
      <div>
        <button
          onClick={() => {
            getCharacter();
          }}
        >
          Get Character
        </button>
      </div>

{starship && <div>
  <h1>Name: {starship.name}</h1>
  <p>Length: {starship.length}</p>
  <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
  <p>Crew: {starship.crew}</p>
  <p>Passengers: {starship.passengers}</p>
 =
  </div>}
 
    </>
  );
}
