export interface PokemonType {
  name: string;
  color: string;
}
export interface PokemonMeasurement {
  metric: string;
  imperial: string;
}

export interface Pokemon {
  name: string;
  image: string;
  dexNumber: string;
  types: PokemonType[];
  classification: string;
  height: PokemonMeasurement;
  weight: PokemonMeasurement;
}
const NORMAL = "#A8A77A";
const FIRE = "#EE8130";
const WATER = "#6390F0";
const ELECTRIC = "#F7D02C";
const GRASS = "#7AC74C";
const ICE = "#96D9D6";
const FIGHTING = "#C22E28";
const POISON = "#A33EA1";
const GROUND = "#E2BF65";
const FLYING = "#A98FF3";
const PSYCHIC = "#F95587";
const BUG = "#A6B91A";
const ROCK = "#B6A136";
const GHOST = "#735797";
const DRAGON = "#6F35FC";
const DARK = "#705746";
const STEEL = "#B7B7CE";
const FAIRY = "#D685AD";

const STARTER_POKEMON: Pokemon[] = [
  {
    name: "Bulbasaur",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/001.png",
    dexNumber: "001",
    types: [
      { name: "Grass", color: GRASS },
      { name: "Poison", color: POISON },
    ],
    classification: "Seed Pokémon",
    height: { metric: "0.7m", imperial: "2'00\"" },
    weight: { metric: "6.9kg", imperial: "15.2lbs" },
  },
  {
    name: "Ivysaur",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/002.png",
    dexNumber: "002",
    types: [
      { name: "Grass", color: GRASS },
      { name: "Poison", color: POISON },
    ],
    classification: "Seed Pokémon",
    height: { metric: "1.0m", imperial: "3'03\"" },
    weight: { metric: "13.0kg", imperial: "28.7lbs" },
  },
  {
    name: "Venasaur",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/003.png",
    dexNumber: "003",
    types: [
      { name: "Grass", color: GRASS },
      { name: "Poison", color: POISON },
    ],
    classification: "Seed Pokémon",
    height: { metric: "2.0m", imperial: "6'07\"" },
    weight: { metric: "130.0kg", imperial: "286.6lbs" },
  },
  {
    name: "Charmander",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/004.png",
    dexNumber: "004",
    types: [{ name: "Fire", color: FIRE }],
    classification: "Lizard Pokémon",
    height: { metric: "0.6m", imperial: "1'10\"" },
    weight: { metric: "8.5kg", imperial: "18.7lbs" },
  },
  {
    name: "Charmeleon",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/005.png",
    dexNumber: "005",
    types: [{ name: "Fire", color: FIRE }],
    classification: "Lizard Pokémon",
    height: { metric: "1.1m", imperial: "3'07\"" },
    weight: { metric: "19.0kg", imperial: "41.9lbs" },
  },
  {
    name: "Charizard",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/006.png",
    dexNumber: "006",
    types: [{ name: "Fire", color: FIRE }],
    classification: "Lizard Pokémon",
    height: { metric: "1.7m", imperial: "5'07\"" },
    weight: { metric: "90.5kg", imperial: "200.0lbs" },
  },
  {
    name: "Squirtle",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/007.png",
    dexNumber: "007",
    types: [{ name: "Water", color: WATER }],
    classification: "Tiny Turtle Pokémon",
    height: { metric: "0.5m", imperial: "1'08\"" },
    weight: { metric: "9.0kg", imperial: "19.8lbs" },
  },
  {
    name: "Wartortle",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/008.png",
    dexNumber: "008",
    types: [{ name: "Water", color: WATER }],
    classification: "Turtle Pokémon",
    height: { metric: "1.0m", imperial: "3'03\"" },
    weight: { metric: "22.5kg", imperial: "49.6lbs" },
  },
  {
    name: "Blastoise",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/009.png",
    dexNumber: "009",
    types: [{ name: "Water", color: WATER }],
    classification: "Turtle Pokémon",
    height: { metric: "1.6m", imperial: "5'03\"" },
    weight: { metric: "85.5kg", imperial: "188.5lbs" },
  },
  {
    name: "Caterpie",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/010.png",
    dexNumber: "010",
    types: [{ name: "Bug", color: BUG }],
    classification: "Worm Pokémon",
    height: { metric: "0.3m", imperial: "0'10\"" },
    weight: { metric: "6.9kg", imperial: "15.2lbs" },
  },
  {
    name: "Metapod",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/011.png",
    dexNumber: "011",
    types: [{ name: "Bug", color: BUG }],
    classification: "Cocoon Pokémon",
    height: { metric: "0.7m", imperial: "2'04\"" },
    weight: { metric: "9.9kg", imperial: "21.8lbs" },
  },
  {
    name: "Butterfree",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/012.png",
    dexNumber: "012",
    types: [{ name: "Bug", color: BUG }, { name: "Flying", color: FLYING }],
    classification: "Butterfly Pokémon",
    height: { metric: "1.1m", imperial: "3'07\"" },
    weight: { metric: "32.0kg", imperial: "70.5lbs" },
  },
  {
    name: "Weedle",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/013.png",
    dexNumber: "013",
    types: [{ name: "Bug", color: BUG }],
    classification: "Hairy Bug Pokémon",
    height: { metric: "0.3m", imperial: "1'00\"" },
    weight: { metric: "32.0kg", imperial: "70.5lbs" },
  },
  {
    name: "Kakuna",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/014.png",
    dexNumber: "014",
    types: [{ name: "Bug", color: BUG }, { name: "Poison", color: POISON }],
    classification: "Cocoon Pokémon",
    height: { metric: "0.6m", imperial: "1'10\"" },
    weight: { metric: "10.0kg", imperial: "22.0lbs" },
  },
  {
    name: "Beedrill",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/015.png",
    dexNumber: "015",
    types: [{ name: "Bug", color: BUG }, { name: "Poison", color: POISON }],
    classification: "Poison Bee Pokémon",
    height: { metric: "1.0m", imperial: "3'03\"" },
    weight: { metric: "29.5kg", imperial: "65.0lbs" },
  },
];

export const getStarterPokemon = (): Pokemon[] => STARTER_POKEMON;
