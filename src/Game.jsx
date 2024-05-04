import Score from "./Score";
import PlayTurn from "./PlayTurn";
import Card from "./Card";
import Message from "./Message";
import ComputerCard from "./ComputerCard";
import { useSelector } from "react-redux";
import { selectTurnPlayed } from "./redux/cardSlice";

const Game = () => {
  const turnPlayed = useSelector(selectTurnPlayed);
  return (
    <>
      <Score />
      <PlayTurn />
      <Card />
      <Message />
      {turnPlayed && <ComputerCard />}
    </>
  );
};

export default Game;
