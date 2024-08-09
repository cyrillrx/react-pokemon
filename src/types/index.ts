export type PokemonType =
  | "grass"
  | "poison"
  | "fire"
  | "flying"
  | "normal"
  | "electric"
  | "ground"
  | "fighting"
  | "bug"
  | "water"
  | "fairy"
  | "psychic"
  | "rock"
  | "steel"
  | "ice"
  | "ghost"
  | "dragon";

export interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  stats: PokemonStats;
  sprites: {
    default: string;
    shiny: string;
  };
  cries: {
    latest: string;
    legacy: string;
  };
  types: [PokemonType] | [PokemonType, PokemonType];
}
