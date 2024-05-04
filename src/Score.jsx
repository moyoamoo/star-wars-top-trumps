import { useSelector } from "react-redux";
import { selectDraw, selectLose, selectWin } from "./redux/cardSlice";

const Score = () => {
  const win = useSelector(selectWin);
  const lose = useSelector(selectLose);
  const draw = useSelector(selectDraw);
  return (
    <>
      <div>
        <p>Win:{win}</p>
        <p>Lose:{lose}</p>
        <p>Draw:{draw}</p>
      </div>
    </>
  );
};

export default Score;
