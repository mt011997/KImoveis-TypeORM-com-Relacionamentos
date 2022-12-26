import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IUserLogin } from "../../interfaces/users";
import jwt from "jsonwebtoken";

const loginService = async (
  userData: IUserLogin
): Promise<[number, string]> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneByOrFail({
    email: userData.email,
  });

  if (!user) {
    throw new AppError("Email or password incorrect", 403);
  }

  if (!user.isActive) {
    throw new AppError("User is not Active", 400);
  }

  const passwordMatch = await compare(userData.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Email or password incorrect", 403);
  }

  const token = jwt.sign(
    {
      isAdm: user.isAdm,
    },
    process.env.SECRET_KEY!,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );

  return [200, token];
};

export default loginService;
