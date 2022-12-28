import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IUser, IUserUpdate } from "../../interfaces/users";
import { userWithoutPassowrd } from "../../schemas/users.schema";

const updateUsersService = async (
  userData: IUserUpdate,
  userId: string
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({
    id: userId,
  });

  if (!findUser) {
    throw new AppError("User not exist", 404);
  }

  const updateUser = userRepository.create({
    ...findUser,
    ...userData,
  });

  await userRepository.save(updateUser);

  const updateReturn = await userWithoutPassowrd.validate(updateUser, {
    stripUnknown: true,
  });
  return updateReturn;
};

export default updateUsersService;
