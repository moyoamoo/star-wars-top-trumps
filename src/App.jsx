import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./css/App.css";
import PlayTurn from "./PlayTurn";
import "./css/styles.css";
//import "./css/index.css";
import Card from "./Card";
import Message from "./Message";
import Header from "./Header";
import Footer from "./Footer";
import Score from "./Score";
import { selectTurnPlayed } from "./redux/cardSlice";
import ComputerCard from "./ComputerCard";

export default function App() {
  const turnPlayed = useSelector(selectTurnPlayed);
  return (
    <>
      <Header />
      <Score />
      <PlayTurn />
      <Card />
      <Message />
      {turnPlayed && <ComputerCard />}
      <Footer />
    </>
  );
}
