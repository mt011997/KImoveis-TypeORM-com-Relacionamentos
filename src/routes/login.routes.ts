import { Router } from "express";
import { loginUserController } from "../controllers/users/users.controllers";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import { userLogin } from "../schemas/users.schema";

const loginRoutes = Router();

loginRoutes.post("", validateSchemaMiddleware(userLogin), loginUserController);

export default loginRoutes;
