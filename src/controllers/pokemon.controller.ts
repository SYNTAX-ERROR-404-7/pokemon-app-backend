import { Request, Response } from "express";
import { getStarterPokemon } from "../services/pokemon.service";

export const getStarters = async (_req: Request, res: Response): Promise<void> => {
  try {
    const pokemon = await getStarterPokemon();
    res.json({ pokemon });
  } catch (error) {
    console.error("Failed to fetch Pokémon", error);
    res.status(500).json({ message: "Failed to fetch Pokémon" });
  }
};
