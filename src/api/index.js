import axios from "axios";

const getPokemon = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => {
      console.log("res", res.data.results);
      return res.data.results;
    })
    .catch((err) => {
      console.error(err);
    });
};

export default getPokemon;