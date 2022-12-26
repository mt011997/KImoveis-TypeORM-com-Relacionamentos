import { Router } from "express";
import {
  createUsersController,
  deleteUsersController,
  listUsersController,
} from "../controllers/users/users.controllers";
import ensureAuthMiddlreware from "../middlewares/ensureAuth.middleware";
import isAdmMiddleware from "../middlewares/isAdm.middleware";

const userRoutes = Router();

userRoutes.post("", createUsersController);
userRoutes.get("", ensureAuthMiddlreware, isAdmMiddleware, listUsersController);
userRoutes.delete(
  "/:id",
  ensureAuthMiddlreware,
  isAdmMiddleware,
  deleteUsersController
);

export default userRoutes;
