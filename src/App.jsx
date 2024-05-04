import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import "./css/App.css";
import PlayTurn from "./PlayTurn";
import "./css/App.css";
import "./css/index.css";

export default function App() {
  return (
    <>
      <PlayTurn />
      <Card />
    </>
  );
}
