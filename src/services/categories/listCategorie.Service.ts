import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/appErrors";

const listCategorieService = async (id: string) => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const categoriExist = await categoryRepository.findOneBy({
    id: id,
  });

  if (!categoriExist) {
    throw new AppError("Category not exist", 404);
  }

  const propsCategory = await categoryRepository.findOne({
    where: { id: id },
    relations: { properties: true },
  });

  return propsCategory;
};

export default listCategorieService;
