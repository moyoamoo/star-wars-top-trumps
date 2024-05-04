import { getCharacter, getComputerChoice } from "./starshipApiRequest";

const PlayTurn = () => {
  return (
    <>
      <button
        onClick={() => {
          getCharacter();
          getComputerChoice()
        }}
      >
        Play Turn
      </button>
    </>
  );
};

export default PlayTurn;
