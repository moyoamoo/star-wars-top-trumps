import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import "./css/App.css";
import PlayTurn from "./PlayTurn";

export default function App() {
  return (
    <>
      <PlayTurn />
      <Card />
    </>
  );
}
