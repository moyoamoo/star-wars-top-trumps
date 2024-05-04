import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "./starshipApiRequest";
import {
  selectComputerChoice,
  selectStarship,
  setMessage,
} from "./redux/cardSlice";
import { useState } from "react";
import "./css/App.css";

const Card = () => {
  const starship = useSelector(selectStarship);
  const computerChoice = useSelector(selectComputerChoice);
  const dispatch = useDispatch();

  const playTurn = (userValue, computerValue) => {
    if (Number(computerValue) === Number(userValue)) {
      return dispatch(setMessage("It's a tie"));
    } else if (Number(computerValue) > Number(userValue)) {
      return dispatch(setMessage("Computer won"));
    } else if (Number(computerChoice) < Number(userValue)) {
      return dispatch(setMessage("You won"));
    }
  };

  return (
    <div className="container">
      {starship && (
        <div>
          <h1 className="name">Name: {starship.name}</h1>
          <img
            className="imageContainer"
            src={`../src/assets/starships/${starship.imageUrlId}.jpg`}
          />
          <button
            className="length"
            onClick={() => {
              if (computerChoice) {
                playTurn(starship.length, computerChoice.length);
              }
            }}
          >
            <p>Length: {starship.length}</p>
          </button>
          <button
            onClick={() => {
              if (computerChoice) {
                playTurn(
                  starship.max_atmosphering_speed,
                  computerChoice.max_atmosphering_speed
                );
              }
            }}
          >
            <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
          </button>
          <button
            onClick={() => {
              if (computerChoice) {
                playTurn(starship.crew, computerChoice.crew);
              }
            }}
          >
            <p>Crew: {starship.crew}</p>
          </button>
          <button
            onClick={() => {
              if (computerChoice) {
                playTurn(starship.passengers, computerChoice.passengers);
              }
            }}
          >
            <p>Passengers: {starship.passengers}</p>
          </button>
        </div>
      )}

      {message && <p>{message}</p>}
    </>
  );
};

export default Card;