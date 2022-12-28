import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";

const listAllCategoriesService = async () => {
  const categorieRepository = AppDataSource.getRepository(Categories);
  const categories = await categorieRepository.find();

  return categories;
};

export default listAllCategoriesService;
