import PokemonModel from "../models/pokemon.model";

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

const STARTER_POKEMON: Pokemon[] = [
  {
    name: "Bulbasaur",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/001.png",
    dexNumber: "001",
    types: [
      { name: "Grass", color: "#7AC74C" },
      { name: "Poison", color: "#A33EA1" },
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
      { name: "Grass", color: "#7AC74C" },
      { name: "Poison", color: "#A33EA1" },
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
      { name: "Grass", color: "#7AC74C" },
      { name: "Poison", color: "#A33EA1" },
    ],
    classification: "Seed Pokémon",
    height: { metric: "2.0m", imperial: "6'07\"" },
    weight: { metric: "130.0kg", imperial: "286.6lbs" },
  },
  {
    name: "Charmander",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/004.png",
    dexNumber: "004",
    types: [{ name: "Fire", color: "#EE8130" }],
    classification: "Lizard Pokémon",
    height: { metric: "0.6m", imperial: "1'10\"" },
    weight: { metric: "8.5kg", imperial: "18.7lbs" },
  },
  {
    name: "Charmeleon",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/005.png",
    dexNumber: "005",
    types: [{ name: "Fire", color: "#EE8130" }],
    classification: "Lizard Pokémon",
    height: { metric: "1.1m", imperial: "3'07\"" },
    weight: { metric: "19.0kg", imperial: "41.9lbs" },
  },
  {
    name: "Charizard",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/006.png",
    dexNumber: "006",
    types: [{ name: "Fire", color: "#EE8130" }],
    classification: "Lizard Pokémon",
    height: { metric: "1.7m", imperial: "5'07\"" },
    weight: { metric: "90.5kg", imperial: "200.0lbs" },
  },
  {
    name: "Squirtle",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/007.png",
    dexNumber: "007",
    types: [{ name: "Water", color: "#6390F0" }],
    classification: "Tiny Turtle Pokémon",
    height: { metric: "0.5m", imperial: "1'08\"" },
    weight: { metric: "9.0kg", imperial: "19.8lbs" },
  },
  {
    name: "Wartortle",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/008.png",
    dexNumber: "008",
    types: [{ name: "Water", color: "#6390F0" }],
    classification: "Turtle Pokémon",
    height: { metric: "1.0m", imperial: "3'03\"" },
    weight: { metric: "22.5kg", imperial: "49.6lbs" },
  },
  {
    name: "Blastoise",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/009.png",
    dexNumber: "009",
    types: [{ name: "Water", color: "#6390F0" }],
    classification: "Turtle Pokémon",
    height: { metric: "1.6m", imperial: "5'03\"" },
    weight: { metric: "85.5kg", imperial: "188.5lbs" },
  },
  {
    name: "Caterpie",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/010.png",
    dexNumber: "010",
    types: [{ name: "Bug", color: "#A6B91A" }],
    classification: "Worm Pokémon",
    height: { metric: "0.3m", imperial: "0'10\"" },
    weight: { metric: "6.9kg", imperial: "15.2lbs" },
  },
  {
    name: "Metapod",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/011.png",
    dexNumber: "011",
    types: [{ name: "Bug", color: "#A6B91A" }],
    classification: "Cocoon Pokémon",
    height: { metric: "0.7m", imperial: "2'04\"" },
    weight: { metric: "9.9kg", imperial: "21.8lbs" },
  },
  {
    name: "Butterfree",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/012.png",
    dexNumber: "012",
    types: [{ name: "Bug", color: "#A6B91A" }, { name: "Flying", color: "#A98FF3" }],
    classification: "Butterfly Pokémon",
    height: { metric: "1.1m", imperial: "3'07\"" },
    weight: { metric: "32.0kg", imperial: "70.5lbs" },
  },
  {
    name: "Weedle",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/013.png",
    dexNumber: "013",
    types: [{ name: "Bug", color: "#A6B91A" }],
    classification: "Hairy Bug Pokémon",
    height: { metric: "0.3m", imperial: "1'00\"" },
    weight: { metric: "32.0kg", imperial: "70.5lbs" },
  },
  {
    name: "Kakuna",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/014.png",
    dexNumber: "014",
    types: [{ name: "Bug", color: "#A6B91A" }, { name: "Poison", color: "#A33EA1" }],
    classification: "Cocoon Pokémon",
    height: { metric: "0.6m", imperial: "1'10\"" },
    weight: { metric: "10.0kg", imperial: "22.0lbs" },
  },
  {
    name: "Beedrill",
    image: "https://www.serebii.net/scarletviolet/pokemon/new/small/015.png",
    dexNumber: "015",
    types: [{ name: "Bug", color: "#A6B91A" }, { name: "Poison", color: "#A33EA1" }],
    classification: "Poison Bee Pokémon",
    height: { metric: "1.0m", imperial: "3'03\"" },
    weight: { metric: "29.5kg", imperial: "65.0lbs" },
  },
];

type PokemonRecord = {
  name: string;
  image: string;
  dexNumber: string;
  types: PokemonType[];
  classification: string;
  height: PokemonMeasurement;
  weight: PokemonMeasurement;
};

const normalizePokemon = (pokemon: PokemonRecord): Pokemon => ({
  name: pokemon.name,
  image: pokemon.image,
  dexNumber: pokemon.dexNumber,
  types: pokemon.types,
  classification: pokemon.classification,
  height: pokemon.height,
  weight: pokemon.weight,
});

const seedStarterPokemon = async (): Promise<void> => {
  const count = await PokemonModel.countDocuments();
  if (count > 0) {
    return;
  }

  await PokemonModel.insertMany(STARTER_POKEMON);
};

export const getStarterPokemon = async (): Promise<Pokemon[]> => {
  await seedStarterPokemon();
  const documents = await PokemonModel.find().sort({ dexNumber: 1 }).lean<PokemonRecord[]>();
  return documents.map(normalizePokemon);
};
