import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRoutes from "./routes/users.routes";
import { handleError } from "./errors/handleError";
import loginRoutes from "./routes/login.routes";
import schedulesRoutes from "./routes/schedules.routes";
import categoriesRoutes from "./routes/categorie.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/schedules", schedulesRoutes);
app.use("/categories", categoriesRoutes);

app.use(handleError);

export default app;
