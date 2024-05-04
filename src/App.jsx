import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css/App.css";
import PlayTurn from "./PlayTurn";
import "./css/App.css";
import "./css/index.css";
import Card from "./Card";
import Message from "./Message";
export default function App() {
  return (
    <>
      <PlayTurn />
      <Card />
      <Message />
    </>
  );
}
