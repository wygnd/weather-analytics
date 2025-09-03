import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from "@nestjs/config";
import RedisConfig from "./common/config/redis.config";
import {MicroserviceOptions, RedisOptions} from "@nestjs/microservices";
import {ValidationPipe} from "@nestjs/common";
import {LoggingInterceptor} from "./common/interceptors/logging.interceptor";

async function bootstrap() {
	const PORT = process.env.PORT || 5000;

	const app = await NestFactory.create(AppModule);
	const configService = app.get(ConfigService);

	app.useGlobalInterceptors(new LoggingInterceptor());
	app.useGlobalPipes(new ValidationPipe());

	const redisConfig = configService.get<RedisOptions>("redis");
	if(!redisConfig) throw new Error("Invalid Redis config");

	app.connectMicroservice<MicroserviceOptions>(redisConfig);

	await app.startAllMicroservices();
	await app.listen(PORT);
}

bootstrap();
