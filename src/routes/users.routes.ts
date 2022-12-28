import { Router } from "express";
import {
  createUsersController,
  deleteUsersController,
  listUsersController,
  updateUsersController,
} from "../controllers/users/users.controllers";
import ensureAuthMiddlreware from "../middlewares/ensureAuth.middleware";
import ensureCorrectUpdateMiddleware from "../middlewares/ensureCorrectUpdate.middleware";
import isAdmMiddleware from "../middlewares/isAdm.middleware";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import { userSerializerUpdate } from "../schemas/users.schema";

const userRoutes = Router();

userRoutes.post("", createUsersController);
userRoutes.get("", ensureAuthMiddlreware, isAdmMiddleware, listUsersController);
userRoutes.delete(
  "/:id",
  ensureAuthMiddlreware,
  isAdmMiddleware,
  deleteUsersController
);
userRoutes.patch(
  "/:id",
  ensureAuthMiddlreware,
  validateSchemaMiddleware(userSerializerUpdate),
  ensureCorrectUpdateMiddleware,
  isAdmMiddleware,
  updateUsersController
);

export default userRoutes;
