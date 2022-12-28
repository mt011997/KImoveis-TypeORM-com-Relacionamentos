import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../../interfaces/users";
import createUsersService from "../../services/users/createUsers.service";
import deleteUsersService from "../../services/users/deleteUsers.service";
import listUsersService from "../../services/users/listUsers.service";
import loginService from "../../services/users/loginUsers.service";
import updateUsersService from "../../services/users/updateUsers.service";

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.status(200).json(users);
};

const createUsersController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newUser = await createUsersService(userData);
  return res.status(201).json(newUser);
};

const loginUserController = async (req: Request, res: Response) => {
  const userData = req.body;
  const [status, token] = await loginService(userData);
  return res.status(status).json({ token: token });
};

const updateUsersController = async (req: Request, res: Response) => {
  const userData: IUserUpdate = req.body;
  const userId = req.params.id;
  const updateUser = await updateUsersService(userData, userId);
  return res.json(updateUser);
};

const deleteUsersController = async (req: Request, res: Response) => {
  const deleteUser = await deleteUsersService(req.params.id);
  return res.status(204).json(deleteUser);
};

export {
  listUsersController,
  createUsersController,
  loginUserController,
  updateUsersController,
  deleteUsersController,
};
