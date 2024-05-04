import { useSelector } from "react-redux";
import { selectDraw, selectWin, selectLose } from "./redux/cardSlice";

const EndGame = () => {
  const win = useSelector(selectWin);
  const draw = useSelector(selectDraw);
  const lose = useSelector(selectLose);

  return (
    <>
      <h2>Game Over!</h2>
    </>
  );
};

export default EndGame;
