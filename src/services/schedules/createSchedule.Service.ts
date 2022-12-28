import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { Schedules_user_properties } from "../../entities/schedules.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appErrors";
import { IScheduleRequest } from "../../interfaces/schedules";

const createScheduleService = async (data: IScheduleRequest, id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const scheduleRepository = AppDataSource.getRepository(
    Schedules_user_properties
  );
  const propsRepository = AppDataSource.getRepository(Properties);

  const userExist = await userRepository.findOneBy({
    id: id,
  });

  const scheduleExist = await scheduleRepository.findOneBy({
    hour: data.hour,
    date: data.date,
  });

  const propsExist = await propsRepository.findOneBy({
    id: data.propertyId,
  });

  const dateSchedule = new Date(data.date).getDay();

  const wrongHour: any = data.hour?.split(":");

  if (!userExist) {
    throw new AppError("User not exist", 404);
  }

  if (!propsExist) {
    throw new AppError("propertie not exist", 404);
  }

  if (scheduleExist) {
    throw new AppError("Schedule already exist", 409);
  }

  if (parseInt(wrongHour[0]) <= 8) {
    throw new AppError("Wrong hour", 400);
  }

  if (parseInt(wrongHour[0]) >= 18) {
    throw new AppError("Wrong hour", 400);
  }

  if (dateSchedule == 6 || dateSchedule == 0) {
    throw new AppError("Invalid date", 400);
  }

  const schedel = scheduleRepository.create({
    date: data.date,
    hour: data.hour,
    properties: propsExist,
    user: userExist,
  });
  await scheduleRepository.save(schedel);

  return { message: "Successfully created!" };
};

export default createScheduleService;
