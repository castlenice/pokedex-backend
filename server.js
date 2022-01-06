import "dotenv/config.js";
import express from "express";
import cors from "cors";
import pokedex from "./routes/pokedex.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/pokedex", pokedex);

app.get("/", (req, res) => {
  res.send("Check out /pokedex !");
});

app.listen(port, () => console.log(`Server hoert an port ${port}`));
