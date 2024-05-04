import { useSelector } from "react-redux";
import { getCharacter } from "./starshipApiRequest";
import { selectComputerChoice, selectStarship } from "./redux/cardSlice";
import { useState } from "react";
import "./css/App.css";

const Card = () => {
  const [message, setMessage] = useState(undefined);
  const starship = useSelector(selectStarship);
  const computerChoice = useSelector(selectComputerChoice);
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
                if (Number(computerChoice.length) === Number(starship.length)) {
                  console.log(computerChoice.length);
                  setMessage("It's a tie");
                } else if (
                  Number(computerChoice.length) > Number(starship.length)
                ) {
                  console.log(computerChoice.length);
                  setMessage("Computer won");
                } else if (
                  Number(computerChoice.length) < Number(starship.length)
                ) {
                  console.log(computerChoice.length);
                  setMessage("You won");
                }
              }
            }}
          >
            <p>Length: {starship.length}</p>
          </button>
          <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
          <p>Crew: {starship.crew}</p>
          <p>Passengers: {starship.passengers}</p>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default Card;
