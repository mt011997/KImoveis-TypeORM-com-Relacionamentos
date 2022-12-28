import { Request, Response } from "express";
import { IScheduleRequest } from "../../interfaces/schedules";
import createScheduleService from "../../services/schedules/createSchedule.Service";
import listScheduleService from "../../services/schedules/listSchedule.Service";

const listScheduleController = async (req: Request, res: Response) => {
  {
    const schedulesId = await listScheduleService(req.params.id);
    return res.json(schedulesId);
  }
};

const createScheduleController = async (req: Request, res: Response) => {
  const scheduleData: IScheduleRequest = req.body;
  const scheduleId = req.params.id;
  const scheduleCreated = await createScheduleService(scheduleData, scheduleId);
  return res.json(scheduleCreated);
};

export { listScheduleController, createScheduleController };
