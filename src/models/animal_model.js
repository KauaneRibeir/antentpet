import db from "../config/db.js";
import bcrypt from "bcrypt";

const AnimalSchema = new db.Schema({
  nome: {
    type: String,
    required: true,
  },
  raca: {
    type: String,
    required: true,
  },
});

const Animal = db.model("Animal", AnimalSchema);

export default Animal;