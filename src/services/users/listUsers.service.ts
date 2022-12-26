import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { listUsersReturnedData } from "../../schemas/users.schema";

const listUsersService = async () => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const returnData = await listUsersReturnedData.validate(users, {
    stripUnknown: true,
  });

  return returnData;
};

export default listUsersService;
