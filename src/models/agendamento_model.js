import db from "../config/db.js"
import bcrypt from "bcrypt";

const agendamentoSchema = new db.Schema({
  data: {
    type: Number,
    required: true,
  },
  hora: {
    type: Number,
    required: true,
  },
  agendamento: {
    type: String,
    required: true,
  },
});

const agendamento = db.model("agendamento",agendamentoSchema);

export default agendamento;