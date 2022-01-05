import "dotenv/config.js";
import express from "express";
import users from "./routes/users.js";
import cors from "cors";
import pokedex from "./data/pokedex.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Check out /pokedex !");
});

app.get("/pokedex", (req, res) => {
  res.send(pokedex);
});

app.get("/pokedex/:id", async (req, res) => {
  const query = req.query.query
  //console.log(query);
  const findpoke = pokedex.find((poke) => poke.id == req.params.id);
  //console.log(findpoke)

  if (query) {
    switch (query) {
      case "name":
        res.status(200).send(findpoke.name)
        break;
      case "type":
        res.status(200).send(findpoke.type)
        break;
      case "base":
        res.status(200).send(findpoke.base)
        break;
      default:
        res.status(404).send("Query existiert nicht.");
    }
  } else {
    
      if (findpoke) {
        res.status(200).send(findpoke);
      } else {
        res.status(404).send("Pokemon existiert nicht.");
      }
      
  }
  
  //console.log(findpoke)
  /**/
});

/*app.get("/pokedex/:id", (req, res) => {
  console.log(req.params.type)
  const findpoketype = pokedex.find((poke) => poke.type == req.query.type);
  console.log(findpoketype)

  if (findpoketype) {
    res.status(200).send(findpoketype);
  } else {
    res.status(404).send("Pokemon existiert nicht.");
  }
}); */

app.listen(port, () => console.log(`Server hoert an port ${port}`));
