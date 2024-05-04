import { useSelector } from "react-redux";
import { getCharacter } from "./starshipApiRequest";
import { selectComputerChoice, selectStarship } from "./redux/cardSlice";

const Card = () => {
  const starship = useSelector(selectStarship);
  const computerChoice = useSelector(selectComputerChoice);
  return (
    <>
      {starship && (
        <div>
          <h1>Name: {starship.name}</h1>
          <img src={`../src/assets/starships/${starship.imageUrlId}.jpg`} />
          <button
            onClick={() => {
              if (computerChoice) {
                if (Number(computerChoice.length) === Number(starship.length)) {
                  return console.log("It's a tie");
                } else if (
                  Number(computerChoice.length) > Number(starship.length)
                ) {
                  return console.log("Computer won");
                } else if (
                  Number(computerChoice.length) < Number(starship.length)
                ) {
                  return console.log("You won");
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
    </>
  );
};

export default Card;
