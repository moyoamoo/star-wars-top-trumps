import { useSelector } from "react-redux";
import { selectComputerChoice } from "./redux/cardSlice";

const ComputerCard = () => {
  const computerChoice = useSelector(selectComputerChoice);
  return (
    <div className="fullCard">
      <div className="cardTop">
        <h1 className="name">Name: {computerChoice.name}</h1>
        <img src={`../src/assets/starships/${computerChoice.imageUrlId}.jpg`} />
      </div>
      <div className="buttonContainer">
          <button  className="buttons">
        
            <p>Length: {computerChoice.length}</p>
          </button>
          <button  className="buttons">
            <p>Max Atmosphering Speed: {computerChoice.max_atmosphering_speed}</p>
          </button>
          <button  className="buttons">
    
            <p>Crew: {computerChoice.crew}</p>
          </button>
          <button  className="buttons">
         
            <p>Passengers: {computerChoice.passengers}</p>
          </button>
      </div>
    </div>
  );
};

export default ComputerCard;
