import mongoose, { Schema, Document, Model } from "mongoose";

export interface PokemonDocument extends Document {
  name: string;
  image: string;
  dexNumber: string;
  types: Array<{ name: string; color: string }>;
  classification: string;
  height: { metric: string; imperial: string };
  weight: { metric: string; imperial: string };
}

const pokemonSchema = new Schema<PokemonDocument>({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  dexNumber: { type: String, required: true, unique: true },
  types: [
    {
      name: { type: String, required: true },
      color: { type: String, required: true },
    },
  ],
  classification: { type: String, required: true },
  height: {
    metric: { type: String, required: true },
    imperial: { type: String, required: true },
  },
  weight: {
    metric: { type: String, required: true },
    imperial: { type: String, required: true },
  },
});

const PokemonModel: Model<PokemonDocument> = mongoose.model<PokemonDocument>("Pokemon", pokemonSchema);

export default PokemonModel;
