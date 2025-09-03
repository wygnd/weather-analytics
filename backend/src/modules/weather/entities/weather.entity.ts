import {Column, DataType, ForeignKey, HasOne, Model, Table} from "sequelize-typescript";
import {CityModel} from "../../city/entities/city.entity";

@Table({tableName: "weather_history"})
export class WeatherModel extends Model<WeatherModel> {
	@Column({type: DataType.STRING})
	weatherId: string;

	@ForeignKey(() => CityModel)
	@Column({type: DataType.STRING, field: 'city_id'})
	cityId: string;
	@HasOne(() => CityModel)
	city: CityModel

	@Column({type: DataType.INTEGER})
	timestamp: number;

	@Column({type: DataType.FLOAT})
	temperature: number;

	@Column({type: DataType.INTEGER})
	humidity: number;

	@Column({type: DataType.INTEGER})
	pressure: number;

	@Column({type: DataType.FLOAT})
	windSpeed: number;

	@Column({type: DataType.INTEGER})
	clouds:number;

	@Column({type: DataType.FLOAT})
	rain: number;

	@Column({type: DataType.FLOAT})
	snow: number;
}