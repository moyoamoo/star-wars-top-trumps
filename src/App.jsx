import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./css/App.css";
import PlayTurn from "./PlayTurn";
import "./css/App.css";
import "./css/index.css";
import Card from "./Card";
import Message from "./Message";
import Header from "./Header";

export default function App() {
  return (
    <>
      <Header />
      <PlayTurn />
      <Card />
      <Message />
      <Footer/>
    </>
  );
}
