import { useDispatch } from "react-redux";
import { getCharacter, getComputerChoice } from "./starshipApiRequest";
import { setMessage } from "./redux/cardSlice";

const PlayTurn = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          getCharacter();
          getComputerChoice();
          dispatch(setMessage(""));
        }}
      >
        Play Turn
      </button>
    </>
  );
};

export default PlayTurn;
