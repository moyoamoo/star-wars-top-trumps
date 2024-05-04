import { useSelector } from "react-redux";
import { selectComputerChoice } from "./redux/cardSlice";

const ComputerCard = () => {
  const computerChoice = useSelector(selectComputerChoice);
  return (
    <div className="header">
      <h1 className="name">Name: {computerChoice.name}</h1>
      <img src={`../src/assets/starships/${computerChoice.imageUrlId}.jpg`} />
      <p>Length: {computerChoice.length}</p>
      <p>Max Atmosphering Speed: {computerChoice.max_atmosphering_speed}</p>
      <p>Crew: {computerChoice.crew}</p>
      <p>Passengers: {computerChoice.passengers}</p>
    </div>
  );
};

export default ComputerCard;
