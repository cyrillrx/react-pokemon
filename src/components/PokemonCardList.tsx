import React from "react";
import "./styles.css";
import PokemonCard from "./PokemonCard";
import pokemons from "../data/pokemons";
import {Pokemon, PokemonType} from "../types";

const pokemonTypes: PokemonType[] = [
    "grass",
    "poison",
    "fire",
    "flying",
    "normal",
    "electric",
    "ground",
    "fighting",
    "bug",
    "water",
    "fairy",
    "psychic",
    "rock",
    "steel",
    "ice",
    "ghost",
    "dragon"
];

const PokemonCardList = () => {
    const [filteredPokemonTypes, setFilteredPokemonTypes] = React.useState<PokemonType[]>([]);

    const toggleFilter = (type: PokemonType) => {
        if (filteredPokemonTypes.includes(type)) {
            setFilteredPokemonTypes(filteredPokemonTypes.filter((filteredType) => filteredType !== type));
        } else {
            setFilteredPokemonTypes([...filteredPokemonTypes, type]);
        }
    }

    const isFiltered = (pokemon: Pokemon) => {
        if (filteredPokemonTypes.length === 0) return true;

        const types = pokemon.types;
        if (types.length === 1) {
            return filteredPokemonTypes.includes(types[0]);
        } else {
            return filteredPokemonTypes.includes(types[0]) || filteredPokemonTypes.includes(types[1]);
        }
    }

    return (
        <div>
            <div className="pokemon-filter">
                {pokemonTypes.map((type) => (
                    <button
                        className={`pokemon-card-type pokemon-card-type-${type.toLowerCase()}`}
                        onClick={() => toggleFilter(type)}>
                        <input type="checkbox" checked={filteredPokemonTypes.includes(type)} readOnly/>
                        {type}
                    </button>
                ))}
            </div>

            <ul className="pokemon-list">
                {pokemons
                    .filter((pokemon) => isFiltered(pokemon))
                    .map((pokemon) => (
                        <PokemonCard pokemon={pokemon}/>
                    ))}
            </ul>
        </div>
    )
};

export default PokemonCardList;
