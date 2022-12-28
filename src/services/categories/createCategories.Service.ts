import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/appErrors";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoriesService = async (
  data: ICategoryRequest
): Promise<[number, ICategoryRequest]> => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const categoryExist = await categoryRepository.findOneBy({
    name: data.name,
  });

  if (categoryExist) {
    throw new AppError("Category already exist", 409);
  }

  const categoryData = categoryRepository.create(data);
  await categoryRepository.save(categoryData);

  return [201, categoryData];
};

export default createCategoriesService;
