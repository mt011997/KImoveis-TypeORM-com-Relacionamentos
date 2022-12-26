import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUser,
  IUserRequest,
  IUserUpdate,
  IUserLogin,
} from "../interfaces/users";

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().required(),
  isAdm: yup.boolean().required(),
});

const userSerializerUpdate: SchemaOf<IUserUpdate> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  password: yup.string().notRequired(),
});

const userWithoutPassowrd: SchemaOf<IUser> = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().notRequired(),
  email: yup.string().notRequired().email(),
  isAdm: yup.boolean().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
  isActive: yup.boolean().notRequired(),
});

const userLogin: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

const listUsersReturnedData = yup.array(userWithoutPassowrd);

export {
  userSerializer,
  userSerializerUpdate,
  userWithoutPassowrd,
  listUsersReturnedData,
  userLogin,
};
