import { getCharacter, getComputerChoice } from "./starshipApiRequest";
import "./css/App.css";

const PlayTurn = () => {
  return (
    <div className="test">
      <button
        className="startButton"
        onClick={() => {
          getCharacter();
          getComputerChoice();
        }}
      >
        Play Turn
      </button>
    </div>
  );
};

export default PlayTurn;
