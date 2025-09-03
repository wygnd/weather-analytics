import {AutoIncrement, Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table({tableName: "city"})
export class CityModel extends Model<CityModel> {
	@PrimaryKey
	@AutoIncrement
	@Column({type: DataType.STRING})
	cityId: string;

	@Column({type: DataType.STRING})
	name: string;

	@Column({type: DataType.STRING})
	country: string;

	@Column({type: DataType.STRING})
	lat: string;

	@Column({type: DataType.STRING})
	lon: string;
}