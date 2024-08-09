import React from "react";
import "./styles.css";
import PokemonCard from "./PokemonCard";
import pokemons from "../data/pokemons";

const PokemonCardList = () => {
  return (
    <ul className="pokemon-list">
        {pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} />
        ))}
    </ul>
  );
};

export default PokemonCardList;
