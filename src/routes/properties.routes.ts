import { Router } from "express";
import {
  createPropertiesController,
  listPropertiesController,
} from "../controllers/properties/properties.controller";
import ensureAuthMiddlreware from "../middlewares/ensureAuth.middleware";
import isAdmMiddleware from "../middlewares/isAdm.middleware";

const propertiesRoutes = Router();

propertiesRoutes.post(
  "",
  ensureAuthMiddlreware,
  isAdmMiddleware,
  createPropertiesController
);

propertiesRoutes.get("", listPropertiesController);

export default propertiesRoutes;
