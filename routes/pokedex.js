import express from "express";
import {
  getAllPokemon,
  getPokemonById,
  getInfoById,
} from "./../controllers/pokedex.js";

const pokedex = express.Router();

pokedex.get("/", getAllPokemon);
pokedex.get("/:id", getPokemonById);
pokedex.get("/:id/:info", getInfoById);

export default pokedex;
