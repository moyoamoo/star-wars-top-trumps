import { useSelector } from "react-redux";
import { getCharacter } from "./starshipApiRequest";
import { selectStarship } from "./redux/cardSlice";

const Card = () => {
  const starship = useSelector(selectStarship);
  return (
    <>
    
      {starship && (
        <div>
          <h1>Name: {starship.name}</h1>
          <img src={`../src/assets/starships/${starship.imageUrlId}.jpg`} />
          <p>Length: {starship.length}</p>
          <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
          <p>Crew: {starship.crew}</p>
          <p>Passengers: {starship.passengers}</p>
        </div>
      )}
    </>
  );
};

export default Card;
