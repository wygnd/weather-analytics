import {ConfigService} from "@nestjs/config";
import {Sequelize} from "sequelize-typescript";
import {CityModel} from "../city/entities/city.entity";

export const databaseProviders = [
	{
		isGlobal: true,
		provide: "SEQUELIZE",
		useFactory: async (configService: ConfigService) => {
			const sequelize = new Sequelize(configService.get("database"));

			sequelize.addModels([CityModel]);
			await sequelize.sync();

			return sequelize;
		},
		inject: [ConfigService],
	}
]