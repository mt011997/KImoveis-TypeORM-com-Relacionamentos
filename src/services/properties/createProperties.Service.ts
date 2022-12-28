import AppDataSource from "../../data-source";
import { Address } from "../../entities/adress.entity";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/appErrors";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertiesService = async (data: IPropertyRequest) => {
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const categorieRepository = AppDataSource.getRepository(Categories);
  const addressRepository = AppDataSource.getRepository(Address);

  const categExist = await categorieRepository.findOneBy({
    id: data.categoryId,
  });

  const addressExist = await addressRepository.findOneBy({
    zipCode: data.address.zipCode,
  });

  if (!categExist) {
    throw new AppError("Categorie not exist", 404);
  }

  if (data.address.state.length > 2) {
    throw new AppError(
      "Cannot be registered with state more than 2 digits",
      400
    );
  }

  if (data.address.zipCode.length > 8) {
    throw new AppError(
      "Cannot be registered with zipcode more than 8 digits",
      400
    );
  }

  if (addressExist) {
    throw new AppError("Address already exist", 409);
  }

  const createAddres = addressRepository.create(data.address);
  await addressRepository.save(createAddres);

  const dataProps = {
    address: createAddres,
    category: categExist,
    size: data.size,
    value: data.value,
  };

  const props = propertiesRepository.create(dataProps);

  await propertiesRepository.save(props);

  return props;
};

export default createPropertiesService;
