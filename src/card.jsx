import { useSelector } from "react-redux";
import { selectComputerChoice, selectStarship } from "./redux/cardSlice";

const Card = () => {
  const starship = useSelector(selectStarship);
  const computerChoice = useSelector(selectComputerChoice);
  return (
    <>
      {starship && (
        <div>
          <h2>Name: {starship.name}</h2>
          <img src={`../src/assets/starships/${starship.imageUrlId}.jpg`} />
          <button
            onClick={() => {
              if (computerChoice) {
                if (Number(computerChoice.crew) === Number(starship.crew)) {
                  console.log("It's a tie");
                } else if (
                  Number(computerChoice.crew) < Number(starship.crew)
                ) {
                  console.log("Computer has won");
                } else if (
                  Number(computerChoice.crew) < Number(starship.crew)
                ) {
                  console.log("You have won");
                }
              }
            }}
          >
        
            <p>Crew {starship.crew}</p>
          </button>
          <p>Max Atomsphering Speed: {starship.max_atmosphering_speed}</p>
          <p>Passengers: {starship.pasengers}</p>
          <p>Max Atomsphering Speed: {starship.max_atmosphering_speed}</p>
        </div>
      )}
    </>
  );
};

export default Card;
