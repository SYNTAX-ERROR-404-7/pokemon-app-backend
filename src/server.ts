import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";
import mongoose from "mongoose";
import routes from "./routes";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const app: Application = express();
const port = process.env.PORT ?? 3000;
const mongoUri = process.env.MONGODB_URI ?? "";

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", routes);

const startServer = async (): Promise<void> => {
  if (!mongoUri) {
    console.error("MONGODB_URI is not defined");
    process.exit(1);
  }

  await mongoose.connect(mongoUri);
  console.log("Connected to MongoDB");

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

void startServer();
