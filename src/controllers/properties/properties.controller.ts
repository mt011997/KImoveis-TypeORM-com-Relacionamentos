import { Request, Response } from "express";
import { IPropertyRequest } from "../../interfaces/properties";
import createPropertiesService from "../../services/properties/createProperties.Service";
import listPropertiesService from "../../services/properties/listProperties.Service";

const createPropertiesController = async (req: Request, res: Response) => {
  const data: IPropertyRequest = req.body;
  const createPropertie = await createPropertiesService(data);
  return res.status(201).json(createPropertie);
};

const listPropertiesController = async (req: Request, res: Response) => {
  const props = await listPropertiesService();
  return res.json(props);
};

export { createPropertiesController, listPropertiesController };
