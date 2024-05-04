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
      <button>
    
        <p>Length: {computerChoice.length}</p>
      </button>
      <button>
        <p>Max Atmosphering Speed: {computerChoice.max_atmosphering_speed}</p>
      </button>
      <button>

        <p>Crew: {computerChoice.crew}</p>
      </button>
      <button>
     
        <p>Passengers: {computerChoice.passengers}</p>
      </button>
    </div>
  );
};

export default ComputerCard;
