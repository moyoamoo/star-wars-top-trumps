import { getCharacter, getComputerChoice } from "./starshipApiRequest";
import "./css/App.css";
import { useDispatch } from "react-redux";
import { setMessage, setTurnPlayed } from "./redux/cardSlice";

const PlayTurn = () => {
  const dispatch = useDispatch();
  return (
    <div className="test">
      <button
        className="startButton"
        onClick={() => {
          getCharacter();
          getComputerChoice();
          dispatch(setMessage(""));
          dispatch(setTurnPlayed(false));
        }}
      >
        Play Turn
      </button>
    </div>
  );
};

export default PlayTurn;
