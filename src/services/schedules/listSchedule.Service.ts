import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
// import { Schedules_user_properties } from "../../entities/schedules.entity";
import { AppError } from "../../errors/appErrors";

const listScheduleService = async (id: string) => {
  //   const ScheduleRepository = AppDataSource.getRepository(
  //     Schedules_user_properties
  //   );
  const propsRepository = AppDataSource.getRepository(Properties);

  const findPropertye = await propsRepository.findOneBy({
    id: id,
  });

  if (!findPropertye) {
    throw new AppError("Schedule not exist", 404);
  }

  const schedules = await propsRepository.findOne({
    relations: { schedules: true },
    where: { id: id },
  });

  //   const scheduleList = await scheduleReturn.validate(schedules, {
  //     stripUnknown: true,
  //   });
  return schedules;
};

export default listScheduleService;
