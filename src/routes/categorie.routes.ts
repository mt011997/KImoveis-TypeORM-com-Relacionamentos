import { Router } from "express";
import {
  createCategoriesController,
  listAllCategoriesController,
  listCategorieController,
} from "../controllers/categories/categories.controllers";
import ensureAuthMiddlreware from "../middlewares/ensureAuth.middleware";
import isAdmMiddleware from "../middlewares/isAdm.middleware";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "",
  ensureAuthMiddlreware,
  isAdmMiddleware,
  createCategoriesController
);

categoriesRoutes.get("", listAllCategoriesController);

categoriesRoutes.get("/:id/properties", listCategorieController);

export default categoriesRoutes;
