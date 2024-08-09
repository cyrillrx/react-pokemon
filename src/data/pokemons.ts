import { Pokemon } from "../types";

const pokemons: Pokemon[] = [
  {
    id: 1,
    name: "bulbasaur",
    weight: 69,
    height: 7,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/1.ogg",
    },
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      specialAttack: 65,
      specialDefense: 65,
      speed: 45,
    },
    types: ["grass", "poison"],
  },
  {
    id: 2,
    name: "ivysaur",
    weight: 130,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/2.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/2.ogg",
    },
    stats: {
      hp: 60,
      attack: 62,
      defense: 63,
      specialAttack: 80,
      specialDefense: 80,
      speed: 60,
    },
    types: ["grass", "poison"],
  },
  {
    id: 3,
    name: "venusaur",
    weight: 1000,
    height: 20,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/3.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/3.ogg",
    },
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialAttack: 100,
      specialDefense: 100,
      speed: 80,
    },
    types: ["grass", "poison"],
  },
  {
    id: 4,
    name: "charmander",
    weight: 85,
    height: 6,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/4.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/4.ogg",
    },
    stats: {
      hp: 39,
      attack: 52,
      defense: 43,
      specialAttack: 60,
      specialDefense: 50,
      speed: 65,
    },
    types: ["fire"],
  },
  {
    id: 5,
    name: "charmeleon",
    weight: 190,
    height: 11,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/5.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/5.ogg",
    },
    stats: {
      hp: 58,
      attack: 64,
      defense: 58,
      specialAttack: 80,
      specialDefense: 65,
      speed: 80,
    },
    types: ["fire"],
  },
  {
    id: 6,
    name: "charizard",
    weight: 905,
    height: 17,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/6.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/6.ogg",
    },
    stats: {
      hp: 78,
      attack: 84,
      defense: 78,
      specialAttack: 109,
      specialDefense: 85,
      speed: 100,
    },
    types: ["fire", "flying"],
  },
  {
    id: 7,
    name: "squirtle",
    weight: 90,
    height: 5,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/7.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/7.ogg",
    },
    stats: {
      hp: 44,
      attack: 48,
      defense: 65,
      specialAttack: 50,
      specialDefense: 64,
      speed: 43,
    },
    types: ["water"],
  },
  {
    id: 8,
    name: "wartortle",
    weight: 225,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/8.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/8.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/8.ogg",
    },
    stats: {
      hp: 59,
      attack: 63,
      defense: 80,
      specialAttack: 65,
      specialDefense: 80,
      speed: 58,
    },
    types: ["water"],
  },
  {
    id: 9,
    name: "blastoise",
    weight: 855,
    height: 16,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/9.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/9.ogg",
    },
    stats: {
      hp: 79,
      attack: 83,
      defense: 100,
      specialAttack: 85,
      specialDefense: 105,
      speed: 78,
    },
    types: ["water"],
  },
  {
    id: 10,
    name: "caterpie",
    weight: 29,
    height: 3,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/10.ogg",
    },
    stats: {
      hp: 45,
      attack: 30,
      defense: 35,
      specialAttack: 20,
      specialDefense: 20,
      speed: 45,
    },
    types: ["bug"],
  },
  {
    id: 11,
    name: "metapod",
    weight: 99,
    height: 7,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/11.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/11.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/11.ogg",
    },
    stats: {
      hp: 50,
      attack: 20,
      defense: 55,
      specialAttack: 25,
      specialDefense: 25,
      speed: 30,
    },
    types: ["bug"],
  },
  {
    id: 12,
    name: "butterfree",
    weight: 320,
    height: 11,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/12.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/12.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/12.ogg",
    },
    stats: {
      hp: 60,
      attack: 45,
      defense: 50,
      specialAttack: 90,
      specialDefense: 80,
      speed: 70,
    },
    types: ["bug", "flying"],
  },
  {
    id: 13,
    name: "weedle",
    weight: 32,
    height: 3,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/13.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/13.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/13.ogg",
    },
    stats: {
      hp: 40,
      attack: 35,
      defense: 30,
      specialAttack: 20,
      specialDefense: 20,
      speed: 50,
    },
    types: ["bug", "poison"],
  },
  {
    id: 14,
    name: "kakuna",
    weight: 100,
    height: 6,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/14.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/14.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/14.ogg",
    },
    stats: {
      hp: 45,
      attack: 25,
      defense: 50,
      specialAttack: 25,
      specialDefense: 25,
      speed: 35,
    },
    types: ["bug", "poison"],
  },
  {
    id: 15,
    name: "beedrill",
    weight: 295,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/15.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/15.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/15.ogg",
    },
    stats: {
      hp: 65,
      attack: 90,
      defense: 40,
      specialAttack: 45,
      specialDefense: 80,
      speed: 75,
    },
    types: ["bug", "poison"],
  },
  {
    id: 16,
    name: "pidgey",
    weight: 18,
    height: 3,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/16.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/16.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/16.ogg",
    },
    stats: {
      hp: 40,
      attack: 45,
      defense: 40,
      specialAttack: 35,
      specialDefense: 35,
      speed: 56,
    },
    types: ["normal", "flying"],
  },
  {
    id: 17,
    name: "pidgeotto",
    weight: 300,
    height: 11,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/17.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/17.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/17.ogg",
    },
    stats: {
      hp: 63,
      attack: 60,
      defense: 55,
      specialAttack: 50,
      specialDefense: 50,
      speed: 71,
    },
    types: ["normal", "flying"],
  },
  {
    id: 18,
    name: "pidgeot",
    weight: 395,
    height: 15,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/18.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/18.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/18.ogg",
    },
    stats: {
      hp: 83,
      attack: 80,
      defense: 75,
      specialAttack: 70,
      specialDefense: 70,
      speed: 101,
    },
    types: ["normal", "flying"],
  },
  {
    id: 19,
    name: "rattata",
    weight: 35,
    height: 3,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/19.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/19.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/19.ogg",
    },
    stats: {
      hp: 30,
      attack: 56,
      defense: 35,
      specialAttack: 25,
      specialDefense: 35,
      speed: 72,
    },
    types: ["normal"],
  },
  {
    id: 20,
    name: "raticate",
    weight: 185,
    height: 7,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/20.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/20.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/20.ogg",
    },
    stats: {
      hp: 55,
      attack: 81,
      defense: 60,
      specialAttack: 50,
      specialDefense: 70,
      speed: 97,
    },
    types: ["normal"],
  },
  {
    id: 21,
    name: "spearow",
    weight: 20,
    height: 3,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/21.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/21.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/21.ogg",
    },
    stats: {
      hp: 40,
      attack: 60,
      defense: 30,
      specialAttack: 31,
      specialDefense: 31,
      speed: 70,
    },
    types: ["normal", "flying"],
  },
  {
    id: 22,
    name: "fearow",
    weight: 380,
    height: 12,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/22.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/22.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/22.ogg",
    },
    stats: {
      hp: 65,
      attack: 90,
      defense: 65,
      specialAttack: 61,
      specialDefense: 61,
      speed: 100,
    },
    types: ["normal", "flying"],
  },
  {
    id: 23,
    name: "ekans",
    weight: 69,
    height: 20,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/23.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/23.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/23.ogg",
    },
    stats: {
      hp: 35,
      attack: 60,
      defense: 44,
      specialAttack: 40,
      specialDefense: 54,
      speed: 55,
    },
    types: ["poison"],
  },
  {
    id: 24,
    name: "arbok",
    weight: 650,
    height: 35,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/24.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/24.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/24.ogg",
    },
    stats: {
      hp: 60,
      attack: 95,
      defense: 69,
      specialAttack: 65,
      specialDefense: 79,
      speed: 80,
    },
    types: ["poison"],
  },
  {
    id: 25,
    name: "pikachu",
    weight: 60,
    height: 4,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/25.ogg",
    },
    stats: {
      hp: 35,
      attack: 55,
      defense: 40,
      specialAttack: 50,
      specialDefense: 50,
      speed: 90,
    },
    types: ["electric"],
  },
  {
    id: 26,
    name: "raichu",
    weight: 300,
    height: 8,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/26.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/26.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/26.ogg",
    },
    stats: {
      hp: 60,
      attack: 90,
      defense: 55,
      specialAttack: 90,
      specialDefense: 80,
      speed: 110,
    },
    types: ["electric"],
  },
  {
    id: 27,
    name: "sandshrew",
    weight: 120,
    height: 6,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/27.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/27.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/27.ogg",
    },
    stats: {
      hp: 50,
      attack: 75,
      defense: 85,
      specialAttack: 20,
      specialDefense: 30,
      speed: 40,
    },
    types: ["ground"],
  },
  {
    id: 28,
    name: "sandslash",
    weight: 295,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/28.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/28.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/28.ogg",
    },
    stats: {
      hp: 75,
      attack: 100,
      defense: 110,
      specialAttack: 45,
      specialDefense: 55,
      speed: 65,
    },
    types: ["ground"],
  },
  {
    id: 29,
    name: "nidoran-f",
    weight: 70,
    height: 4,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/29.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/29.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/29.ogg",
    },
    stats: {
      hp: 55,
      attack: 47,
      defense: 52,
      specialAttack: 40,
      specialDefense: 40,
      speed: 41,
    },
    types: ["poison"],
  },
  {
    id: 30,
    name: "nidorina",
    weight: 200,
    height: 8,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/30.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/30.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/30.ogg",
    },
    stats: {
      hp: 70,
      attack: 62,
      defense: 67,
      specialAttack: 55,
      specialDefense: 55,
      speed: 56,
    },
    types: ["poison"],
  },
  {
    id: 31,
    name: "nidoqueen",
    weight: 600,
    height: 13,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/31.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/31.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/31.ogg",
    },
    stats: {
      hp: 90,
      attack: 92,
      defense: 87,
      specialAttack: 75,
      specialDefense: 85,
      speed: 76,
    },
    types: ["poison", "ground"],
  },
  {
    id: 32,
    name: "nidoran-m",
    weight: 90,
    height: 5,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/32.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/32.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/32.ogg",
    },
    stats: {
      hp: 46,
      attack: 57,
      defense: 40,
      specialAttack: 40,
      specialDefense: 40,
      speed: 50,
    },
    types: ["poison"],
  },
  {
    id: 33,
    name: "nidorino",
    weight: 195,
    height: 9,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/33.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/33.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/33.ogg",
    },
    stats: {
      hp: 61,
      attack: 72,
      defense: 57,
      specialAttack: 55,
      specialDefense: 55,
      speed: 65,
    },
    types: ["poison"],
  },
  {
    id: 34,
    name: "nidoking",
    weight: 620,
    height: 14,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/34.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/34.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/34.ogg",
    },
    stats: {
      hp: 81,
      attack: 102,
      defense: 77,
      specialAttack: 85,
      specialDefense: 75,
      speed: 85,
    },
    types: ["poison", "ground"],
  },
  {
    id: 35,
    name: "clefairy",
    weight: 75,
    height: 6,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/35.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/35.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/35.ogg",
    },
    stats: {
      hp: 70,
      attack: 45,
      defense: 48,
      specialAttack: 60,
      specialDefense: 65,
      speed: 35,
    },
    types: ["fairy"],
  },
  {
    id: 36,
    name: "clefable",
    weight: 400,
    height: 13,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/36.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/36.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/36.ogg",
    },
    stats: {
      hp: 95,
      attack: 70,
      defense: 73,
      specialAttack: 95,
      specialDefense: 90,
      speed: 60,
    },
    types: ["fairy"],
  },
  {
    id: 37,
    name: "vulpix",
    weight: 99,
    height: 6,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/37.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/37.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/37.ogg",
    },
    stats: {
      hp: 38,
      attack: 41,
      defense: 40,
      specialAttack: 50,
      specialDefense: 65,
      speed: 65,
    },
    types: ["fire"],
  },
  {
    id: 38,
    name: "ninetales",
    weight: 199,
    height: 11,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/38.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/38.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/38.ogg",
    },
    stats: {
      hp: 73,
      attack: 76,
      defense: 75,
      specialAttack: 81,
      specialDefense: 100,
      speed: 100,
    },
    types: ["fire"],
  },
  {
    id: 39,
    name: "jigglypuff",
    weight: 55,
    height: 5,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/39.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/39.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/39.ogg",
    },
    stats: {
      hp: 115,
      attack: 45,
      defense: 20,
      specialAttack: 45,
      specialDefense: 25,
      speed: 20,
    },
    types: ["normal", "fairy"],
  },
  {
    id: 40,
    name: "wigglytuff",
    weight: 120,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/40.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/40.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/40.ogg",
    },
    stats: {
      hp: 140,
      attack: 70,
      defense: 45,
      specialAttack: 85,
      specialDefense: 50,
      speed: 45,
    },
    types: ["normal", "fairy"],
  },
  {
    id: 41,
    name: "zubat",
    weight: 75,
    height: 8,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/41.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/41.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/41.ogg",
    },
    stats: {
      hp: 40,
      attack: 45,
      defense: 35,
      specialAttack: 30,
      specialDefense: 40,
      speed: 55,
    },
    types: ["poison", "flying"],
  },
  {
    id: 42,
    name: "golbat",
    weight: 550,
    height: 16,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/42.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/42.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/42.ogg",
    },
    stats: {
      hp: 75,
      attack: 80,
      defense: 70,
      specialAttack: 65,
      specialDefense: 75,
      speed: 90,
    },
    types: ["poison", "flying"],
  },
  {
    id: 43,
    name: "oddish",
    weight: 54,
    height: 5,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/43.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/43.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/43.ogg",
    },
    stats: {
      hp: 45,
      attack: 50,
      defense: 55,
      specialAttack: 75,
      specialDefense: 65,
      speed: 30,
    },
    types: ["grass", "poison"],
  },
  {
    id: 44,
    name: "gloom",
    weight: 86,
    height: 8,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/44.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/44.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/44.ogg",
    },
    stats: {
      hp: 60,
      attack: 65,
      defense: 70,
      specialAttack: 85,
      specialDefense: 75,
      speed: 40,
    },
    types: ["grass", "poison"],
  },
  {
    id: 45,
    name: "vileplume",
    weight: 186,
    height: 12,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/45.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/45.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/45.ogg",
    },
    stats: {
      hp: 75,
      attack: 80,
      defense: 85,
      specialAttack: 110,
      specialDefense: 90,
      speed: 50,
    },
    types: ["grass", "poison"],
  },
  {
    id: 46,
    name: "paras",
    weight: 54,
    height: 3,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/46.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/46.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/46.ogg",
    },
    stats: {
      hp: 35,
      attack: 70,
      defense: 55,
      specialAttack: 45,
      specialDefense: 55,
      speed: 25,
    },
    types: ["bug", "grass"],
  },
  {
    id: 47,
    name: "parasect",
    weight: 295,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/47.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/47.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/47.ogg",
    },
    stats: {
      hp: 60,
      attack: 95,
      defense: 80,
      specialAttack: 60,
      specialDefense: 80,
      speed: 30,
    },
    types: ["bug", "grass"],
  },
  {
    id: 48,
    name: "venonat",
    weight: 300,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/48.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/48.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/48.ogg",
    },
    stats: {
      hp: 60,
      attack: 55,
      defense: 50,
      specialAttack: 40,
      specialDefense: 55,
      speed: 45,
    },
    types: ["bug", "poison"],
  },
  {
    id: 49,
    name: "venomoth",
    weight: 125,
    height: 15,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/49.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/49.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/49.ogg",
    },
    stats: {
      hp: 70,
      attack: 65,
      defense: 60,
      specialAttack: 90,
      specialDefense: 75,
      speed: 90,
    },
    types: ["bug", "poison"],
  },
  {
    id: 50,
    name: "diglett",
    weight: 8,
    height: 2,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/50.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/50.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/50.ogg",
    },
    stats: {
      hp: 10,
      attack: 55,
      defense: 25,
      specialAttack: 35,
      specialDefense: 45,
      speed: 95,
    },
    types: ["ground"],
  },
  {
    id: 51,
    name: "dugtrio",
    weight: 333,
    height: 7,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/51.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/51.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/51.ogg",
    },
    stats: {
      hp: 35,
      attack: 100,
      defense: 50,
      specialAttack: 50,
      specialDefense: 70,
      speed: 120,
    },
    types: ["ground"],
  },
  {
    id: 52,
    name: "meowth",
    weight: 42,
    height: 4,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/52.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/52.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/52.ogg",
    },
    stats: {
      hp: 40,
      attack: 45,
      defense: 35,
      specialAttack: 40,
      specialDefense: 40,
      speed: 90,
    },
    types: ["normal"],
  },
  {
    id: 53,
    name: "persian",
    weight: 320,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/53.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/53.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/53.ogg",
    },
    stats: {
      hp: 65,
      attack: 70,
      defense: 60,
      specialAttack: 65,
      specialDefense: 65,
      speed: 115,
    },
    types: ["normal"],
  },
  {
    id: 54,
    name: "psyduck",
    weight: 196,
    height: 8,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/54.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/54.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/54.ogg",
    },
    stats: {
      hp: 50,
      attack: 52,
      defense: 48,
      specialAttack: 65,
      specialDefense: 50,
      speed: 55,
    },
    types: ["water"],
  },
  {
    id: 55,
    name: "golduck",
    weight: 766,
    height: 17,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/55.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/55.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/55.ogg",
    },
    stats: {
      hp: 80,
      attack: 82,
      defense: 78,
      specialAttack: 95,
      specialDefense: 80,
      speed: 85,
    },
    types: ["water"],
  },
  {
    id: 56,
    name: "mankey",
    weight: 280,
    height: 5,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/56.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/56.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/56.ogg",
    },
    stats: {
      hp: 40,
      attack: 80,
      defense: 35,
      specialAttack: 35,
      specialDefense: 45,
      speed: 70,
    },
    types: ["fighting"],
  },
  {
    id: 57,
    name: "primeape",
    weight: 320,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/57.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/57.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/57.ogg",
    },
    stats: {
      hp: 65,
      attack: 105,
      defense: 60,
      specialAttack: 60,
      specialDefense: 70,
      speed: 95,
    },
    types: ["fighting"],
  },
  {
    id: 58,
    name: "growlithe",
    weight: 190,
    height: 7,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/58.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/58.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/58.ogg",
    },
    stats: {
      hp: 55,
      attack: 70,
      defense: 45,
      specialAttack: 70,
      specialDefense: 50,
      speed: 60,
    },
    types: ["fire"],
  },
  {
    id: 59,
    name: "arcanine",
    weight: 1550,
    height: 19,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/59.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/59.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/59.ogg",
    },
    stats: {
      hp: 90,
      attack: 110,
      defense: 80,
      specialAttack: 100,
      specialDefense: 80,
      speed: 95,
    },
    types: ["fire"],
  },
  {
    id: 60,
    name: "poliwag",
    weight: 124,
    height: 6,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/60.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/60.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/60.ogg",
    },
    stats: {
      hp: 40,
      attack: 50,
      defense: 40,
      specialAttack: 40,
      specialDefense: 40,
      speed: 90,
    },
    types: ["water"],
  },
  {
    id: 61,
    name: "poliwhirl",
    weight: 200,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/61.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/61.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/61.ogg",
    },
    stats: {
      hp: 65,
      attack: 65,
      defense: 65,
      specialAttack: 50,
      specialDefense: 50,
      speed: 90,
    },
    types: ["water"],
  },
  {
    id: 62,
    name: "poliwrath",
    weight: 540,
    height: 13,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/62.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/62.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/62.ogg",
    },
    stats: {
      hp: 90,
      attack: 95,
      defense: 95,
      specialAttack: 70,
      specialDefense: 90,
      speed: 70,
    },
    types: ["water", "fighting"],
  },
  {
    id: 63,
    name: "abra",
    weight: 195,
    height: 9,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/63.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/63.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/63.ogg",
    },
    stats: {
      hp: 25,
      attack: 20,
      defense: 15,
      specialAttack: 105,
      specialDefense: 55,
      speed: 90,
    },
    types: ["psychic"],
  },
  {
    id: 64,
    name: "kadabra",
    weight: 565,
    height: 13,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/64.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/64.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/64.ogg",
    },
    stats: {
      hp: 40,
      attack: 35,
      defense: 30,
      specialAttack: 120,
      specialDefense: 70,
      speed: 105,
    },
    types: ["psychic"],
  },
  {
    id: 65,
    name: "alakazam",
    weight: 480,
    height: 15,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/65.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/65.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/65.ogg",
    },
    stats: {
      hp: 55,
      attack: 50,
      defense: 45,
      specialAttack: 135,
      specialDefense: 95,
      speed: 120,
    },
    types: ["psychic"],
  },
  {
    id: 66,
    name: "machop",
    weight: 195,
    height: 8,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/66.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/66.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/66.ogg",
    },
    stats: {
      hp: 70,
      attack: 80,
      defense: 50,
      specialAttack: 35,
      specialDefense: 35,
      speed: 35,
    },
    types: ["fighting"],
  },
  {
    id: 67,
    name: "machoke",
    weight: 705,
    height: 15,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/67.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/67.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/67.ogg",
    },
    stats: {
      hp: 80,
      attack: 100,
      defense: 70,
      specialAttack: 50,
      specialDefense: 60,
      speed: 45,
    },
    types: ["fighting"],
  },
  {
    id: 68,
    name: "machamp",
    weight: 1300,
    height: 16,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/68.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/68.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/68.ogg",
    },
    stats: {
      hp: 90,
      attack: 130,
      defense: 80,
      specialAttack: 65,
      specialDefense: 85,
      speed: 55,
    },
    types: ["fighting"],
  },
  {
    id: 69,
    name: "bellsprout",
    weight: 40,
    height: 7,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/69.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/69.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/69.ogg",
    },
    stats: {
      hp: 50,
      attack: 75,
      defense: 35,
      specialAttack: 70,
      specialDefense: 30,
      speed: 40,
    },
    types: ["grass", "poison"],
  },
  {
    id: 70,
    name: "weepinbell",
    weight: 64,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/70.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/70.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/70.ogg",
    },
    stats: {
      hp: 65,
      attack: 90,
      defense: 50,
      specialAttack: 85,
      specialDefense: 45,
      speed: 55,
    },
    types: ["grass", "poison"],
  },
  {
    id: 71,
    name: "victreebel",
    weight: 155,
    height: 17,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/71.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/71.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/71.ogg",
    },
    stats: {
      hp: 80,
      attack: 105,
      defense: 65,
      specialAttack: 100,
      specialDefense: 70,
      speed: 70,
    },
    types: ["grass", "poison"],
  },
  {
    id: 72,
    name: "tentacool",
    weight: 455,
    height: 9,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/72.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/72.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/72.ogg",
    },
    stats: {
      hp: 40,
      attack: 40,
      defense: 35,
      specialAttack: 50,
      specialDefense: 100,
      speed: 70,
    },
    types: ["water", "poison"],
  },
  {
    id: 73,
    name: "tentacruel",
    weight: 550,
    height: 16,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/73.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/73.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/73.ogg",
    },
    stats: {
      hp: 80,
      attack: 70,
      defense: 65,
      specialAttack: 80,
      specialDefense: 120,
      speed: 100,
    },
    types: ["water", "poison"],
  },
  {
    id: 74,
    name: "geodude",
    weight: 200,
    height: 4,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/74.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/74.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/74.ogg",
    },
    stats: {
      hp: 40,
      attack: 80,
      defense: 100,
      specialAttack: 30,
      specialDefense: 30,
      speed: 20,
    },
    types: ["rock", "ground"],
  },
  {
    id: 75,
    name: "graveler",
    weight: 1050,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/75.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/75.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/75.ogg",
    },
    stats: {
      hp: 55,
      attack: 95,
      defense: 115,
      specialAttack: 45,
      specialDefense: 45,
      speed: 35,
    },
    types: ["rock", "ground"],
  },
  {
    id: 76,
    name: "golem",
    weight: 3000,
    height: 14,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/76.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/76.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/76.ogg",
    },
    stats: {
      hp: 80,
      attack: 120,
      defense: 130,
      specialAttack: 55,
      specialDefense: 65,
      speed: 45,
    },
    types: ["rock", "ground"],
  },
  {
    id: 77,
    name: "ponyta",
    weight: 300,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/77.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/77.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/77.ogg",
    },
    stats: {
      hp: 50,
      attack: 85,
      defense: 55,
      specialAttack: 65,
      specialDefense: 65,
      speed: 90,
    },
    types: ["fire"],
  },
  {
    id: 78,
    name: "rapidash",
    weight: 950,
    height: 17,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/78.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/78.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/78.ogg",
    },
    stats: {
      hp: 65,
      attack: 100,
      defense: 70,
      specialAttack: 80,
      specialDefense: 80,
      speed: 105,
    },
    types: ["fire"],
  },
  {
    id: 79,
    name: "slowpoke",
    weight: 360,
    height: 12,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/79.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/79.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/79.ogg",
    },
    stats: {
      hp: 90,
      attack: 65,
      defense: 65,
      specialAttack: 40,
      specialDefense: 40,
      speed: 15,
    },
    types: ["water", "psychic"],
  },
  {
    id: 80,
    name: "slowbro",
    weight: 785,
    height: 16,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/80.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/80.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/80.ogg",
    },
    stats: {
      hp: 95,
      attack: 75,
      defense: 110,
      specialAttack: 100,
      specialDefense: 80,
      speed: 30,
    },
    types: ["water", "psychic"],
  },
  {
    id: 81,
    name: "magnemite",
    weight: 60,
    height: 3,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/81.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/81.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/81.ogg",
    },
    stats: {
      hp: 25,
      attack: 35,
      defense: 70,
      specialAttack: 95,
      specialDefense: 55,
      speed: 45,
    },
    types: ["electric", "steel"],
  },
  {
    id: 82,
    name: "magneton",
    weight: 600,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/82.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/82.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/82.ogg",
    },
    stats: {
      hp: 50,
      attack: 60,
      defense: 95,
      specialAttack: 120,
      specialDefense: 70,
      speed: 70,
    },
    types: ["electric", "steel"],
  },
  {
    id: 83,
    name: "farfetchd",
    weight: 150,
    height: 8,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/83.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/83.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/83.ogg",
    },
    stats: {
      hp: 52,
      attack: 90,
      defense: 55,
      specialAttack: 58,
      specialDefense: 62,
      speed: 60,
    },
    types: ["normal", "flying"],
  },
  {
    id: 84,
    name: "doduo",
    weight: 392,
    height: 14,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/84.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/84.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/84.ogg",
    },
    stats: {
      hp: 35,
      attack: 85,
      defense: 45,
      specialAttack: 35,
      specialDefense: 35,
      speed: 75,
    },
    types: ["normal", "flying"],
  },
  {
    id: 85,
    name: "dodrio",
    weight: 852,
    height: 18,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/85.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/85.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/85.ogg",
    },
    stats: {
      hp: 60,
      attack: 110,
      defense: 70,
      specialAttack: 60,
      specialDefense: 60,
      speed: 110,
    },
    types: ["normal", "flying"],
  },
  {
    id: 86,
    name: "seel",
    weight: 900,
    height: 11,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/86.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/86.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/86.ogg",
    },
    stats: {
      hp: 65,
      attack: 45,
      defense: 55,
      specialAttack: 45,
      specialDefense: 70,
      speed: 45,
    },
    types: ["water"],
  },
  {
    id: 87,
    name: "dewgong",
    weight: 1200,
    height: 17,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/87.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/87.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/87.ogg",
    },
    stats: {
      hp: 90,
      attack: 70,
      defense: 80,
      specialAttack: 70,
      specialDefense: 95,
      speed: 70,
    },
    types: ["water", "ice"],
  },
  {
    id: 88,
    name: "grimer",
    weight: 300,
    height: 9,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/88.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/88.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/88.ogg",
    },
    stats: {
      hp: 80,
      attack: 80,
      defense: 50,
      specialAttack: 40,
      specialDefense: 50,
      speed: 25,
    },
    types: ["poison"],
  },
  {
    id: 89,
    name: "muk",
    weight: 300,
    height: 12,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/89.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/89.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/89.ogg",
    },
    stats: {
      hp: 105,
      attack: 105,
      defense: 75,
      specialAttack: 65,
      specialDefense: 100,
      speed: 50,
    },
    types: ["poison"],
  },
  {
    id: 90,
    name: "shellder",
    weight: 40,
    height: 3,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/90.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/90.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/90.ogg",
    },
    stats: {
      hp: 30,
      attack: 65,
      defense: 100,
      specialAttack: 45,
      specialDefense: 25,
      speed: 40,
    },
    types: ["water"],
  },
  {
    id: 91,
    name: "cloyster",
    weight: 1325,
    height: 15,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/91.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/91.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/91.ogg",
    },
    stats: {
      hp: 50,
      attack: 95,
      defense: 180,
      specialAttack: 85,
      specialDefense: 45,
      speed: 70,
    },
    types: ["water", "ice"],
  },
  {
    id: 92,
    name: "gastly",
    weight: 1,
    height: 13,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/92.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/92.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/92.ogg",
    },
    stats: {
      hp: 30,
      attack: 35,
      defense: 30,
      specialAttack: 100,
      specialDefense: 35,
      speed: 80,
    },
    types: ["ghost", "poison"],
  },
  {
    id: 93,
    name: "haunter",
    weight: 1,
    height: 16,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/93.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/93.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/93.ogg",
    },
    stats: {
      hp: 45,
      attack: 50,
      defense: 45,
      specialAttack: 115,
      specialDefense: 55,
      speed: 95,
    },
    types: ["ghost", "poison"],
  },
  {
    id: 94,
    name: "gengar",
    weight: 405,
    height: 15,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/94.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/94.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/94.ogg",
    },
    stats: {
      hp: 60,
      attack: 65,
      defense: 60,
      specialAttack: 130,
      specialDefense: 75,
      speed: 110,
    },
    types: ["ghost", "poison"],
  },
  {
    id: 95,
    name: "onix",
    weight: 2100,
    height: 88,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/95.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/95.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/95.ogg",
    },
    stats: {
      hp: 35,
      attack: 45,
      defense: 160,
      specialAttack: 30,
      specialDefense: 45,
      speed: 70,
    },
    types: ["rock", "ground"],
  },
  {
    id: 96,
    name: "drowzee",
    weight: 324,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/96.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/96.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/96.ogg",
    },
    stats: {
      hp: 60,
      attack: 48,
      defense: 45,
      specialAttack: 43,
      specialDefense: 90,
      speed: 42,
    },
    types: ["psychic"],
  },
  {
    id: 97,
    name: "hypno",
    weight: 756,
    height: 16,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/97.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/97.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/97.ogg",
    },
    stats: {
      hp: 85,
      attack: 73,
      defense: 70,
      specialAttack: 73,
      specialDefense: 115,
      speed: 67,
    },
    types: ["psychic"],
  },
  {
    id: 98,
    name: "krabby",
    weight: 65,
    height: 4,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/98.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/98.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/98.ogg",
    },
    stats: {
      hp: 30,
      attack: 105,
      defense: 90,
      specialAttack: 25,
      specialDefense: 25,
      speed: 50,
    },
    types: ["water"],
  },
  {
    id: 99,
    name: "kingler",
    weight: 600,
    height: 13,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/99.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/99.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/99.ogg",
    },
    stats: {
      hp: 55,
      attack: 130,
      defense: 115,
      specialAttack: 50,
      specialDefense: 50,
      speed: 75,
    },
    types: ["water"],
  },
  {
    id: 100,
    name: "voltorb",
    weight: 104,
    height: 5,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/100.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/100.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/100.ogg",
    },
    stats: {
      hp: 40,
      attack: 30,
      defense: 50,
      specialAttack: 55,
      specialDefense: 55,
      speed: 100,
    },
    types: ["electric"],
  },
  {
    id: 101,
    name: "electrode",
    weight: 666,
    height: 12,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/101.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/101.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/101.ogg",
    },
    stats: {
      hp: 60,
      attack: 50,
      defense: 70,
      specialAttack: 80,
      specialDefense: 80,
      speed: 150,
    },
    types: ["electric"],
  },
  {
    id: 102,
    name: "exeggcute",
    weight: 25,
    height: 4,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/102.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/102.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/102.ogg",
    },
    stats: {
      hp: 60,
      attack: 40,
      defense: 80,
      specialAttack: 60,
      specialDefense: 45,
      speed: 40,
    },
    types: ["grass", "psychic"],
  },
  {
    id: 103,
    name: "exeggutor",
    weight: 1200,
    height: 20,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/103.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/103.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/103.ogg",
    },
    stats: {
      hp: 95,
      attack: 95,
      defense: 85,
      specialAttack: 125,
      specialDefense: 75,
      speed: 55,
    },
    types: ["grass", "psychic"],
  },
  {
    id: 104,
    name: "cubone",
    weight: 65,
    height: 4,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/104.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/104.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/104.ogg",
    },
    stats: {
      hp: 50,
      attack: 50,
      defense: 95,
      specialAttack: 40,
      specialDefense: 50,
      speed: 35,
    },
    types: ["ground"],
  },
  {
    id: 105,
    name: "marowak",
    weight: 450,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/105.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/105.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/105.ogg",
    },
    stats: {
      hp: 60,
      attack: 80,
      defense: 110,
      specialAttack: 50,
      specialDefense: 80,
      speed: 45,
    },
    types: ["ground"],
  },
  {
    id: 106,
    name: "hitmonlee",
    weight: 498,
    height: 15,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/106.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/106.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/106.ogg",
    },
    stats: {
      hp: 50,
      attack: 120,
      defense: 53,
      specialAttack: 35,
      specialDefense: 110,
      speed: 87,
    },
    types: ["fighting"],
  },
  {
    id: 107,
    name: "hitmonchan",
    weight: 502,
    height: 14,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/107.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/107.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/107.ogg",
    },
    stats: {
      hp: 50,
      attack: 105,
      defense: 79,
      specialAttack: 35,
      specialDefense: 110,
      speed: 76,
    },
    types: ["fighting"],
  },
  {
    id: 108,
    name: "lickitung",
    weight: 655,
    height: 12,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/108.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/108.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/108.ogg",
    },
    stats: {
      hp: 90,
      attack: 55,
      defense: 75,
      specialAttack: 60,
      specialDefense: 75,
      speed: 30,
    },
    types: ["normal"],
  },
  {
    id: 109,
    name: "koffing",
    weight: 10,
    height: 6,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/109.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/109.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/109.ogg",
    },
    stats: {
      hp: 40,
      attack: 65,
      defense: 95,
      specialAttack: 60,
      specialDefense: 45,
      speed: 35,
    },
    types: ["poison"],
  },
  {
    id: 110,
    name: "weezing",
    weight: 95,
    height: 12,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/110.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/110.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/110.ogg",
    },
    stats: {
      hp: 65,
      attack: 90,
      defense: 120,
      specialAttack: 85,
      specialDefense: 70,
      speed: 60,
    },
    types: ["poison"],
  },
  {
    id: 111,
    name: "rhyhorn",
    weight: 1150,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/111.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/111.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/111.ogg",
    },
    stats: {
      hp: 80,
      attack: 85,
      defense: 95,
      specialAttack: 30,
      specialDefense: 30,
      speed: 25,
    },
    types: ["ground", "rock"],
  },
  {
    id: 112,
    name: "rhydon",
    weight: 1200,
    height: 19,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/112.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/112.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/112.ogg",
    },
    stats: {
      hp: 105,
      attack: 130,
      defense: 120,
      specialAttack: 45,
      specialDefense: 45,
      speed: 40,
    },
    types: ["ground", "rock"],
  },
  {
    id: 113,
    name: "chansey",
    weight: 346,
    height: 11,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/113.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/113.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/113.ogg",
    },
    stats: {
      hp: 250,
      attack: 5,
      defense: 5,
      specialAttack: 35,
      specialDefense: 105,
      speed: 50,
    },
    types: ["normal"],
  },
  {
    id: 114,
    name: "tangela",
    weight: 350,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/114.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/114.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/114.ogg",
    },
    stats: {
      hp: 65,
      attack: 55,
      defense: 115,
      specialAttack: 100,
      specialDefense: 40,
      speed: 60,
    },
    types: ["grass"],
  },
  {
    id: 115,
    name: "kangaskhan",
    weight: 800,
    height: 22,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/115.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/115.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/115.ogg",
    },
    stats: {
      hp: 105,
      attack: 95,
      defense: 80,
      specialAttack: 40,
      specialDefense: 80,
      speed: 90,
    },
    types: ["normal"],
  },
  {
    id: 116,
    name: "horsea",
    weight: 80,
    height: 4,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/116.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/116.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/116.ogg",
    },
    stats: {
      hp: 30,
      attack: 40,
      defense: 70,
      specialAttack: 70,
      specialDefense: 25,
      speed: 60,
    },
    types: ["water"],
  },
  {
    id: 117,
    name: "seadra",
    weight: 250,
    height: 12,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/117.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/117.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/117.ogg",
    },
    stats: {
      hp: 55,
      attack: 65,
      defense: 95,
      specialAttack: 95,
      specialDefense: 45,
      speed: 85,
    },
    types: ["water"],
  },
  {
    id: 118,
    name: "goldeen",
    weight: 150,
    height: 6,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/118.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/118.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/118.ogg",
    },
    stats: {
      hp: 45,
      attack: 67,
      defense: 60,
      specialAttack: 35,
      specialDefense: 50,
      speed: 63,
    },
    types: ["water"],
  },
  {
    id: 119,
    name: "seaking",
    weight: 390,
    height: 13,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/119.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/119.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/119.ogg",
    },
    stats: {
      hp: 80,
      attack: 92,
      defense: 65,
      specialAttack: 65,
      specialDefense: 80,
      speed: 68,
    },
    types: ["water"],
  },
  {
    id: 120,
    name: "staryu",
    weight: 345,
    height: 8,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/120.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/120.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/120.ogg",
    },
    stats: {
      hp: 30,
      attack: 45,
      defense: 55,
      specialAttack: 70,
      specialDefense: 55,
      speed: 85,
    },
    types: ["water"],
  },
  {
    id: 121,
    name: "starmie",
    weight: 800,
    height: 11,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/121.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/121.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/121.ogg",
    },
    stats: {
      hp: 60,
      attack: 75,
      defense: 85,
      specialAttack: 100,
      specialDefense: 85,
      speed: 115,
    },
    types: ["water", "psychic"],
  },
  {
    id: 122,
    name: "mr-mime",
    weight: 545,
    height: 13,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/122.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/122.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/122.ogg",
    },
    stats: {
      hp: 40,
      attack: 45,
      defense: 65,
      specialAttack: 100,
      specialDefense: 120,
      speed: 90,
    },
    types: ["psychic", "fairy"],
  },
  {
    id: 123,
    name: "scyther",
    weight: 560,
    height: 15,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/123.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/123.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/123.ogg",
    },
    stats: {
      hp: 70,
      attack: 110,
      defense: 80,
      specialAttack: 55,
      specialDefense: 80,
      speed: 105,
    },
    types: ["bug", "flying"],
  },
  {
    id: 124,
    name: "jynx",
    weight: 406,
    height: 14,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/124.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/124.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/124.ogg",
    },
    stats: {
      hp: 65,
      attack: 50,
      defense: 35,
      specialAttack: 115,
      specialDefense: 95,
      speed: 95,
    },
    types: ["ice", "psychic"],
  },
  {
    id: 125,
    name: "electabuzz",
    weight: 300,
    height: 11,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/125.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/125.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/125.ogg",
    },
    stats: {
      hp: 65,
      attack: 83,
      defense: 57,
      specialAttack: 95,
      specialDefense: 85,
      speed: 105,
    },
    types: ["electric"],
  },
  {
    id: 126,
    name: "magmar",
    weight: 445,
    height: 13,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/126.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/126.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/126.ogg",
    },
    stats: {
      hp: 65,
      attack: 95,
      defense: 57,
      specialAttack: 100,
      specialDefense: 85,
      speed: 93,
    },
    types: ["fire"],
  },
  {
    id: 127,
    name: "pinsir",
    weight: 550,
    height: 15,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/127.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/127.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/127.ogg",
    },
    stats: {
      hp: 65,
      attack: 125,
      defense: 100,
      specialAttack: 55,
      specialDefense: 70,
      speed: 85,
    },
    types: ["bug"],
  },
  {
    id: 128,
    name: "tauros",
    weight: 884,
    height: 14,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/128.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/128.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/128.ogg",
    },
    stats: {
      hp: 75,
      attack: 100,
      defense: 95,
      specialAttack: 40,
      specialDefense: 70,
      speed: 110,
    },
    types: ["normal"],
  },
  {
    id: 129,
    name: "magikarp",
    weight: 100,
    height: 9,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/129.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/129.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/129.ogg",
    },
    stats: {
      hp: 20,
      attack: 10,
      defense: 55,
      specialAttack: 15,
      specialDefense: 20,
      speed: 80,
    },
    types: ["water"],
  },
  {
    id: 130,
    name: "gyarados",
    weight: 2350,
    height: 65,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/130.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/130.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/130.ogg",
    },
    stats: {
      hp: 95,
      attack: 125,
      defense: 79,
      specialAttack: 60,
      specialDefense: 100,
      speed: 81,
    },
    types: ["water", "flying"],
  },
  {
    id: 131,
    name: "lapras",
    weight: 2200,
    height: 25,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/131.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/131.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/131.ogg",
    },
    stats: {
      hp: 130,
      attack: 85,
      defense: 80,
      specialAttack: 85,
      specialDefense: 95,
      speed: 60,
    },
    types: ["water", "ice"],
  },
  {
    id: 132,
    name: "ditto",
    weight: 40,
    height: 3,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/132.ogg",
    },
    stats: {
      hp: 48,
      attack: 48,
      defense: 48,
      specialAttack: 48,
      specialDefense: 48,
      speed: 48,
    },
    types: ["normal"],
  },
  {
    id: 133,
    name: "eevee",
    weight: 65,
    height: 3,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/133.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/133.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/133.ogg",
    },
    stats: {
      hp: 55,
      attack: 55,
      defense: 50,
      specialAttack: 45,
      specialDefense: 65,
      speed: 55,
    },
    types: ["normal"],
  },
  {
    id: 134,
    name: "vaporeon",
    weight: 290,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/134.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/134.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/134.ogg",
    },
    stats: {
      hp: 130,
      attack: 65,
      defense: 60,
      specialAttack: 110,
      specialDefense: 95,
      speed: 65,
    },
    types: ["water"],
  },
  {
    id: 135,
    name: "jolteon",
    weight: 245,
    height: 8,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/135.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/135.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/135.ogg",
    },
    stats: {
      hp: 65,
      attack: 65,
      defense: 60,
      specialAttack: 110,
      specialDefense: 95,
      speed: 130,
    },
    types: ["electric"],
  },
  {
    id: 136,
    name: "flareon",
    weight: 250,
    height: 9,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/136.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/136.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/136.ogg",
    },
    stats: {
      hp: 65,
      attack: 130,
      defense: 60,
      specialAttack: 95,
      specialDefense: 110,
      speed: 65,
    },
    types: ["fire"],
  },
  {
    id: 137,
    name: "porygon",
    weight: 365,
    height: 8,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/137.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/137.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/137.ogg",
    },
    stats: {
      hp: 65,
      attack: 60,
      defense: 70,
      specialAttack: 85,
      specialDefense: 75,
      speed: 40,
    },
    types: ["normal"],
  },
  {
    id: 138,
    name: "omanyte",
    weight: 75,
    height: 4,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/138.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/138.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/138.ogg",
    },
    stats: {
      hp: 35,
      attack: 40,
      defense: 100,
      specialAttack: 90,
      specialDefense: 55,
      speed: 35,
    },
    types: ["rock", "water"],
  },
  {
    id: 139,
    name: "omastar",
    weight: 350,
    height: 10,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/139.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/139.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/139.ogg",
    },
    stats: {
      hp: 70,
      attack: 60,
      defense: 125,
      specialAttack: 115,
      specialDefense: 70,
      speed: 55,
    },
    types: ["rock", "water"],
  },
  {
    id: 140,
    name: "kabuto",
    weight: 115,
    height: 5,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/140.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/140.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/140.ogg",
    },
    stats: {
      hp: 30,
      attack: 80,
      defense: 90,
      specialAttack: 55,
      specialDefense: 45,
      speed: 55,
    },
    types: ["rock", "water"],
  },
  {
    id: 141,
    name: "kabutops",
    weight: 405,
    height: 13,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/141.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/141.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/141.ogg",
    },
    stats: {
      hp: 60,
      attack: 115,
      defense: 105,
      specialAttack: 65,
      specialDefense: 70,
      speed: 80,
    },
    types: ["rock", "water"],
  },
  {
    id: 142,
    name: "aerodactyl",
    weight: 590,
    height: 18,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/142.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/142.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/142.ogg",
    },
    stats: {
      hp: 80,
      attack: 105,
      defense: 65,
      specialAttack: 60,
      specialDefense: 75,
      speed: 130,
    },
    types: ["rock", "flying"],
  },
  {
    id: 143,
    name: "snorlax",
    weight: 4600,
    height: 21,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/143.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/143.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/143.ogg",
    },
    stats: {
      hp: 160,
      attack: 110,
      defense: 65,
      specialAttack: 65,
      specialDefense: 110,
      speed: 30,
    },
    types: ["normal"],
  },
  {
    id: 144,
    name: "articuno",
    weight: 554,
    height: 17,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/144.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/144.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/144.ogg",
    },
    stats: {
      hp: 90,
      attack: 85,
      defense: 100,
      specialAttack: 95,
      specialDefense: 125,
      speed: 85,
    },
    types: ["ice", "flying"],
  },
  {
    id: 145,
    name: "zapdos",
    weight: 526,
    height: 16,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/145.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/145.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/145.ogg",
    },
    stats: {
      hp: 90,
      attack: 90,
      defense: 85,
      specialAttack: 125,
      specialDefense: 90,
      speed: 100,
    },
    types: ["electric", "flying"],
  },
  {
    id: 146,
    name: "moltres",
    weight: 600,
    height: 20,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/146.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/146.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/146.ogg",
    },
    stats: {
      hp: 90,
      attack: 100,
      defense: 90,
      specialAttack: 125,
      specialDefense: 85,
      speed: 90,
    },
    types: ["fire", "flying"],
  },
  {
    id: 147,
    name: "dratini",
    weight: 33,
    height: 18,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/147.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/147.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/147.ogg",
    },
    stats: {
      hp: 41,
      attack: 64,
      defense: 45,
      specialAttack: 50,
      specialDefense: 50,
      speed: 50,
    },
    types: ["dragon"],
  },
  {
    id: 148,
    name: "dragonair",
    weight: 165,
    height: 40,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/148.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/148.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/148.ogg",
    },
    stats: {
      hp: 61,
      attack: 84,
      defense: 65,
      specialAttack: 70,
      specialDefense: 70,
      speed: 70,
    },
    types: ["dragon"],
  },
  {
    id: 149,
    name: "dragonite",
    weight: 2100,
    height: 22,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/149.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/149.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/149.ogg",
    },
    stats: {
      hp: 91,
      attack: 134,
      defense: 95,
      specialAttack: 100,
      specialDefense: 100,
      speed: 80,
    },
    types: ["dragon", "flying"],
  },
  {
    id: 150,
    name: "mewtwo",
    weight: 1220,
    height: 20,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/150.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/150.ogg",
    },
    stats: {
      hp: 106,
      attack: 110,
      defense: 90,
      specialAttack: 154,
      specialDefense: 90,
      speed: 130,
    },
    types: ["psychic"],
  },
  {
    id: 151,
    name: "mew",
    weight: 40,
    height: 4,
    sprites: {
      default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
      shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/151.png",
    },
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/151.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/151.ogg",
    },
    stats: {
      hp: 100,
      attack: 100,
      defense: 100,
      specialAttack: 100,
      specialDefense: 100,
      speed: 100,
    },
    types: ["psychic"],
  },
];

export default pokemons;
