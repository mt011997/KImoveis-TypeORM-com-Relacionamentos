import { Router } from "express";
import {
  createUsersController,
  listUsersController,
} from "../controllers/users/users.controllers";

const userRoutes = Router();

userRoutes.post("", createUsersController);
userRoutes.get("", listUsersController);

export default userRoutes;
