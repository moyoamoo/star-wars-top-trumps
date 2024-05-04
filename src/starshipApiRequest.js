import axios from "axios";
import { store } from "./redux/store";
import { setStarship, setComputerChoice } from "./redux/cardSlice";

export const getCharacter = async () => {
  const starshipIdRandom = Math.floor(Math.random() * 35);

  const starshipIds = [
    2, 3, 5, 9, 10, 11, 12, 13, 15, 17, 21, 22, 23, 27, 28, 29, 31, 32, 39, 40,
    41, 43, 47, 48, 49, 52, 58, 59, 61, 63, 64, 65, 66, 68, 74, 75,
  ];

  try {
    const { data } = await axios.get(
      `https://swapi.dev/api/starships/${starshipIds[starshipIdRandom]}/`
    );

    if (data) {
      data.imageUrlId = starshipIds[starshipIdRandom];
      store.dispatch(setStarship(data));
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const getComputerChoice = async () => {
  const starshipIdRandom = Math.floor(Math.random() * 35);

  const starshipIds = [
    2, 3, 5, 9, 10, 11, 12, 13, 15, 17, 21, 22, 23, 27, 28, 29, 31, 32, 39, 40,
    41, 43, 47, 48, 49, 52, 58, 59, 61, 63, 64, 65, 66, 68, 74, 75,
  ];

  try {
    const { data } = await axios.get(
      `https://swapi.dev/api/starships/${starshipIds[starshipIdRandom]}/`
    );

    if (data) {
      data.imageUrlId = starshipIds[starshipIdRandom];
      store.dispatch(setComputerChoice(data));
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
