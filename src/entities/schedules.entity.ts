import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Properties } from "./properties.entity";

import { User } from "./user.entity";

@Entity("schedules_user_properties")
class Schedules_user_properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => Properties)
  properties: Properties;

  @ManyToOne(() => User, { eager: true })
  user: User;
}

export { Schedules_user_properties };
