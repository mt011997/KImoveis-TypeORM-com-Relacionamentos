import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appErrors";

const ensureCorrectUpdateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const keys = Object.keys(req.body);
  if (
    keys.includes("id") ||
    keys.includes("isActive") ||
    keys.includes("isAdm")
  ) {
    throw new AppError("Canot update", 401);
  }

  return next();
};

export default ensureCorrectUpdateMiddleware;
