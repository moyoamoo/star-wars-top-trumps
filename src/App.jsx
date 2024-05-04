import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./css/App.css";
import PlayTurn from "./PlayTurn";
import "./css/App.css";
import "./css/index.css";
import Card from "./Card";
import Message from "./Message";
import Header from "./Header";
import Footer from "./Footer";
import Score from "./Score";

export default function App() {
  return (
    <>
      <Header />
      <Score/>
      <PlayTurn />
      <Card />
      <Message />
      <Footer/>
    </>
  );
}
