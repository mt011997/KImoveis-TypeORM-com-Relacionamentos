import { Router } from "express";
import {
  createScheduleController,
  listScheduleController,
} from "../controllers/schedules/schedules.controllers";
import ensureAuthMiddlreware from "../middlewares/ensureAuth.middleware";
import isAdmMiddleware from "../middlewares/isAdm.middleware";

const schedulesRoutes = Router();

schedulesRoutes.post("", ensureAuthMiddlreware, createScheduleController);
schedulesRoutes.get(
  "/properties/:id",
  ensureAuthMiddlreware,
  isAdmMiddleware,
  listScheduleController
);

export default schedulesRoutes;
