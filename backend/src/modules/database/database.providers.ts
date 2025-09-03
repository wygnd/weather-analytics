import {DatabaseModule} from "./database.module";
import {ConfigService} from "@nestjs/config";
import {Sequelize, SequelizeOptions} from "sequelize-typescript";
import {WeatherModel} from "../weather/entities/weather.entity";
import {UserModel} from "../users/entities/users.entity";
import {CityModel} from "../city/entities/city.entity";

export const databaseProviders = [
	{
		isGlobal: true,
		provide: "SEQUELIZE",
		useFactory: (configService: ConfigService) => async () => {
			const sequelize = new Sequelize(configService.get<SequelizeOptions>("database"));
			sequelize.addModels([WeatherModel, UserModel, CityModel]);
			await sequelize.sync();
			return sequelize;
		},
		inject: [ConfigService],
	}
]