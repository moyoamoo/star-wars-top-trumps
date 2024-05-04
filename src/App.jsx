import React from "react";
import { useSelector } from "react-redux";
import Game from "./game";
import "./css/App.css";
import "./css/index.css";

import Header from "./Header";
import Footer from "./Footer";

import { selectTurn } from "./redux/cardSlice";
import EndGame from "./EndGame";

export default function App() {
  const turn = useSelector(selectTurn);
  return (
    <>
      <Header />

      {turn === 3? <EndGame /> : <Game />}

      <Footer />
    </>
  );
}
