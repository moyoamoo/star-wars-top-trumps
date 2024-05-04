import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./css/App.css";
import { getCharacter } from "./starshipApiRequest";
import { selectStarship } from "./redux/cardSlice";



const getUserChoice = (userSelection) => {
    userSelection = onclick; 
   if ( userSelection === {starship.length} || userSelection === {starship.max_atmosphering_speed} || userSelection === {starship.crew} || userSelection === {starship.passengers}) {
    return userSelection
  }  else { console.log( "Error! Select a Stat!")}
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  switch (randomNumber) {
   case 0 :
    return {starship.length};
    break;
   case 1 :
    return {starship.max_atmosphering_speed};
    break;
   case 2 :
    return {starship.crew};
    break;
   case 3 :
     return {starship.passengers};
     break;
  }
};


const determineWinner = (userChoice, computerChoice) => {
  if ( userChoice === computerChoice) {return "It's a tie!"
  }  else if (userChoice < computerChoice) {return "${starship.name} won!"} else { return " ${starship.name} won!"
  } else if (userChoice > computerChoice) {return "${starship.name} won!"} else { return " ${starship.name} won!"}
  };


const playGame = () => { 
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice,computerChoice));
};

playGame()
