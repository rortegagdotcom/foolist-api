import dotenv from "dotenv";
dotenv.config();

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || "foolist",
  MONGO_USER: process.env.MONGO_USER || "admin",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "bN-B/|DwDgKc}yh",
  MONGO_HOST: process.env.MONGO_HOST || "localhost",
  PORT: process.env.PORT || "4000",
};
