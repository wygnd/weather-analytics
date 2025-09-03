import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import databaseConfig from "./common/config/database.config";
import redisConfig from "./common/config/redis.config";
import {UsersModule} from "./modules/users/users.module";
import {WeatherModule} from "./modules/weather/weather.module";
import {RedisModule} from "./modules/redis/redis.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [databaseConfig, redisConfig]
		}), UsersModule, WeatherModule, RedisModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
