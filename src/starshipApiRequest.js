import axios from "axios";

export const getCharacter = async () => {
  try {
    const { data } = await axios.get("https://swapi.dev/api/starships/9/");

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
