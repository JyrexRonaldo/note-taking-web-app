import { loadEnvFile } from "node:process";
import express from "express";
loadEnvFile();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, (error: unknown) => {
  const errorMessage = "Something went wrong, ";
  if (error instanceof Error) {
    console.log(errorMessage + error.message);
  }
  console.log(process.env.PORT);
  console.log(`My Express app - listening on port ${PORT}!`);
});
