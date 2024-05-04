import { getCharacter } from "./starshipApiRequest";

const PlayTurn = () => {
  return (
    <>
      <button
        onClick={() => {
          getCharacter();
        }}
      >
        Play Turn
      </button>
    </>
  );
};

export default PlayTurn;
