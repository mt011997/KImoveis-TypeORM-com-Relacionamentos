import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/users";
import createUsersService from "../../services/users/createUsers.service";
import listUsersService from "../../services/users/listUsers.service";

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.status(200).json(users);
};

const createUsersController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newUser = await createUsersService(userData);
  return res.status(201).json(newUser);
};

export { listUsersController, createUsersController };
