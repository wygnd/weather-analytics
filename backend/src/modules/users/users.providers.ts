import {UserModel} from "./entities/users.entity";

export const usersProviders = [{provide: "UserRepository", useValue: UserModel}]