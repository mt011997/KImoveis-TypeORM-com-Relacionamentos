import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IUser, IUserRequest } from "../../interfaces/users";
import { userWithoutPassowrd } from "../../schemas/users.schema";

const createUsersService = async (userData: IUserRequest): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);
  const email = await userRepository.findOneBy({
    email: userData.email,
  });

  if (email) {
    throw new AppError("Email already exist", 409);
  }

  const user = userRepository.create(userData);
  await userRepository.save(user);

  const returnData = await userWithoutPassowrd.validate(user, {
    stripUnknown: true,
  });

  return returnData;
};

export default createUsersService;
