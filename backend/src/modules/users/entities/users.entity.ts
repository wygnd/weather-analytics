import {UserRoles} from "../interfaces/users.interface";
import {Model, AutoIncrement, Column, DataType, PrimaryKey, Table} from "sequelize-typescript";

@Table({tableName: "users"})
export class UserModel extends Model<UserModel> {
	@PrimaryKey
	@AutoIncrement
	@Column({type: DataType.STRING})
	userId: string;

	@Column({type: DataType.STRING})
	email: string;

	@Column({type: DataType.STRING})
	password: string;

	@Column({type: DataType.ENUM(...Object.keys(UserRoles))})
	role: UserRoles
}