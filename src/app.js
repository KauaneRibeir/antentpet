import e from "express";
import "dotenv/config";
import user_router from "./routes/user_route.js";
import agendamento_router from "./routes/agendamento_route.js";
import animal_router from "./routes/user_route.js";

const app = e();

app.use(e.json());

app.use("/user", user_router);
app.use("/agendameto", agendamento_router);
app.use("/animal", animal_router)

app.listen(process.env.API_PORT, () => console.log("Servidor executando na porta " + process.env.API_PORT));