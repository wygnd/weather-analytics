import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import databaseConfig from "./common/config/database.config";
import redisConfig from "./common/config/redis.config";
import {RedisModule} from "./modules/redis/redis.module";
import {CityModule} from "./modules/city/city.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [databaseConfig, redisConfig]
		}), CityModule, RedisModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
