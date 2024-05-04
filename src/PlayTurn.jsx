import { useDispatch } from "react-redux";
import { getCharacter, getComputerChoice } from "./starshipApiRequest";
import { setMessage } from "./redux/cardSlice";

const PlayTurn = () => {
  const dispatch = useDispatch();
  return (
    <div className="test">
      <button
        className="startButton"
        onClick={() => {
          getCharacter();
          getComputerChoice()
          dispatch(setMessage(""))
        }}
      >
        Play Turn
      </button>
    </div>
  );
};

export default PlayTurn;
