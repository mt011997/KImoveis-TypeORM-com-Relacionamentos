import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";

const deleteUsersService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const userFind = await userRepository.findOneBy({
    id: id,
  });

  if (!userFind) {
    throw new AppError("User not found", 404);
  }
  if (!userFind.isActive) {
    throw new AppError("User is not active", 400);
  }

  const userDelete = await userRepository.save({
    ...userFind,
    isActive: false,
  });

  return {};
};

export default deleteUsersService;
