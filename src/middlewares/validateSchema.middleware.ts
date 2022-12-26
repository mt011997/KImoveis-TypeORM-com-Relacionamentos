import { Request, Response, NextFunction } from "express";

const validateSchemaMiddleware =
  (serializer: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await serializer.validate(req.body, {
        stripUnknow: true,
        abortEarly: true,
      });
      req.body = validated;
      return next();
    } catch (err: any) {
      return res.status(400).json({ message: err.errors });
    }
  };

export default validateSchemaMiddleware;
