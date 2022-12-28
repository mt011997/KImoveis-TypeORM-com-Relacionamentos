import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";

const listPropertiesService = async () => {
  const propsRepository = AppDataSource.getRepository(Properties);
  const props = await propsRepository.find();

  return props;
};

export default listPropertiesService;
