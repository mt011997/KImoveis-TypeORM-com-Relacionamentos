import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appErrors";

const isAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user } = req;

  if (user.isAdm === false) {
    throw new AppError("Missing ADM authorization", 403);
  }

  return next();
};

export default isAdmMiddleware;
