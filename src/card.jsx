import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "./starshipApiRequest";
import {
  selectComputerChoice,
  selectStarship,
  setTurnPlayed,
  selectTurnPlayed,
  setMessage,
  setDraw,
  setLose,
  setWin,
  setTurn,
} from "./redux/cardSlice";
import { useState } from "react";
import "./css/App.css";

const Card = () => {
  const dispatch = useDispatch();
  const starship = useSelector(selectStarship);
  const computerChoice = useSelector(selectComputerChoice);
  const turnPlayed = useSelector(selectTurnPlayed);

  const playTurn = (computerValue, userValue) => {
    if (Number(computerValue) === Number(userValue)) {
      dispatch(setMessage("It's a tie"));
      dispatch(setDraw(1));
      dispatch(setTurnPlayed(true));
      dispatch(setTurn(1));
      return;
    } else if (Number(computerChoice.length) > Number(starship.length)) {
      console.log(computerChoice.length);
      dispatch(setMessage("Computer won"));
      dispatch(setTurnPlayed(true));
      dispatch(setLose(1));
      dispatch(setTurn(1));
      return;
    } else if (Number(computerChoice.length) < Number(starship.length)) {
      console.log(computerChoice.length);
      dispatch(setMessage("You won"));
      dispatch(setTurnPlayed(true));
      dispatch(setWin(1));
      dispatch(setTurn(1));
      return;
    }
  };
  return (
    <>
      {starship && (
        <div className="fullCard">
          <div className="cardTop">
            <h1 className="name">Name: {starship.name}</h1>
            <img src={`../src/assets/starships/${starship.imageUrlId}.jpg`} />
          </div>
          <button className="buttons"
            disabled={turnPlayed ? true : false}
            onClick={() => {
              if (computerChoice) {
                if (starship.length === "unknown") {
                  starship.length === 0;
                }
                playTurn(computerChoice.length, starship.length);
              }
            }}
          >
            <p>Length: {starship.length}</p>
          </button>
          <button
            disabled={turnPlayed ? true : false}
            onClick={() => {
              if (computerChoice) {
                if (
                  starship.max_atmosphering_speed === "unknown" ||
                  starship.max_atmosphering_speed === "n/a"
                ) {
                  starship.length === 0;
                }
                playTurn(
                  computerChoice.max_atmosphering_speed,
                  starship.max_atmosphering_speed
                );
              }
            }}
          >
            <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
          </button>
          <button
            disabled={turnPlayed ? true : false}
            onClick={() => {
              if (computerChoice) {
                if (starship.crew === "unknown" || starship.crew === "n/a") {
                  starship.crew === 0;
                }
                playTurn(computerChoice.crew, starship.crew);
              }
            }}
          >
            {" "}
            <p>Crew: {starship.crew}</p>
          </button>
          <button
            disabled={turnPlayed ? true : false}
            onClick={() => {
              if (computerChoice) {
                if (
                  starship.passengers === "unknown" ||
                  starship.passengers === "n/a"
                ) {
                  starship.passengers === 0;
                }
                playTurn(computerChoice.passengers, starship.passengers);
              }
            }}
          >
            <p>Passengers: {starship.passengers}</p>
          </button>
        </div>
      )}
    </>
  );
};

export default Card;
