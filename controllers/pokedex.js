import pokedex from "./../data/pokedex.js";

export const getAllPokemon = (req, res) => {
  res.send(pokedex);
};

export const getPokemonById = (req, res) => {
  const findpoke = pokedex.find((poke) => poke.id == req.params.id);

  if (findpoke) {
    res.status(200).send(findpoke);
  } else {
    res.status(404).send("Pokemon existiert nicht.");
  }
};

export const getInfoById = (req, res) => {
  const { id, info } = req.params;
  const findpoke = pokedex.find((poke) => poke.id == id);

  if (findpoke) {
    switch (info) {
      case "name":
        res.status(200).send(findpoke.name);
        break;
      case "type":
        res.status(200).send(findpoke.type);
        break;
      case "base":
        res.status(200).send(findpoke.base);
        break;
      default:
        res.status(404).send("Info existiert nicht.");
    }
  } else {
    res.status(404).send("Pokemon existiert nicht.");
  }
};
