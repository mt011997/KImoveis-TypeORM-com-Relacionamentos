import { Request, Response } from "express";
import { ICategoryRequest } from "../../interfaces/categories";
import createCategoriesService from "../../services/categories/createCategories.Service";
import listAllCategoriesService from "../../services/categories/listAllCategories.Service";
import listCategorieService from "../../services/categories/listCategorie.Service";

const createCategoriesController = async (req: Request, res: Response) => {
  const data: ICategoryRequest = req.body;
  const [status, createCategories] = await createCategoriesService(data);
  return res.status(status as number).json(createCategories);
};

const listAllCategoriesController = async (req: Request, res: Response) => {
  const allCategories = await listAllCategoriesService();
  return res.status(200).json(allCategories);
};

const listCategorieController = async (req: Request, res: Response) => {
  const propsCategoriesData = await listCategorieService(req.params.id);
  return res.json(propsCategoriesData);
};

export {
  createCategoriesController,
  listAllCategoriesController,
  listCategorieController,
};
