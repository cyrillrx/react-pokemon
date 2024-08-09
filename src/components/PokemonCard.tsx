import React, {FunctionComponent} from "react";
import {Pokemon} from "../types";

interface PokemonCardProps {
    pokemon: Pokemon;
}

function pokeLabel(type: string) {
    return (
        <li className={`pokemon-card-type pokemon-card-type-${type.toLowerCase()}`}>
            {type}
        </li>
    )
}

const PokemonCard: FunctionComponent<PokemonCardProps> = ({pokemon}) => {
    const [isShiny, setIsShiny] = React.useState(false);

    const imageUrl: string = isShiny ? pokemon.sprites.shiny : pokemon.sprites.default;

    return (
        <li className="pokemon-card">
            <span className="pokemon-card-name">{pokemon.name}</span>
            <img src={imageUrl}/>

            <button className="button-toggle-shiny" onClick={() => setIsShiny(!isShiny)}>
                <input type="checkbox" checked={isShiny} readOnly/>
                Shiny
            </button>

            <ul className="pokemon-card-types">
                {pokemon.types.map((type, index) => (
                    pokeLabel(type)
                ))}
            </ul>

            <ul className="pokemon-card-types">
                <li>
                    <button onClick={() => new Audio(pokemon.cries.legacy).play()}>
                        legacy cry
                    </button>
                </li>
                <li>
                    <button onClick={() => new Audio(pokemon.cries.latest).play()}>
                        Latest cry
                    </button>
                </li>
            </ul>
        </li>
    )
}

export default PokemonCard;
