import { useSelector } from "react-redux";
import Lose from "./Lose";
import Win from "./Win";
import Draw from "./Draw";
import { useDispatch } from "react-redux";

import {
  selectDraw,
  selectWin,
  selectLose,
  selectWindow,
  setWindow,
} from "./redux/cardSlice";

const EndGame = () => {
  const win = useSelector(selectWin);
  const draw = useSelector(selectDraw);
  const lose = useSelector(selectLose);
  const window = useSelector(selectWindow);
  const dispatch = useDispatch()
  let result;

  if (win > lose) {
    dispatch(setWindow(2));
  } else if (win < lose) {
    dispatch(setWindow(0));
  } else {
    dispatch(setWindow(1));
  }
  return (
    <>
      <h2>Game Over!</h2>
      {window === 0 && <Lose />}
      {window === 1 && <Draw />}
      {window === 2 && <Win />}
    </>
  );
};

export default EndGame;
