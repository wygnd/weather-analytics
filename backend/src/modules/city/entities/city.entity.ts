import {AutoIncrement, Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";
import {CityAttributes, CityCreationAttributes} from "../interfaces/city.interface";

@Table({tableName: "city"})
export class CityModel extends Model<CityAttributes, CityCreationAttributes> {
	@PrimaryKey
	@Column({type: DataType.INTEGER, autoIncrement: true})
	cityId: number;

	@Column({type: DataType.STRING})
	name: string;

	@Column({type: DataType.STRING})
	country: string;

	@Column({type: DataType.STRING})
	lat: string;

	@Column({type: DataType.STRING})
	lon: string;
}