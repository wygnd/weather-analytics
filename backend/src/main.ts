import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {LoggingInterceptor} from "./common/interceptors/logging.interceptor";

async function bootstrap() {
	const PORT = process.env.PORT || 5000;

	const app = await NestFactory.create(AppModule);

	app.useGlobalInterceptors(new LoggingInterceptor());
	app.useGlobalPipes(new ValidationPipe());

	await app.startAllMicroservices();
	await app.listen(PORT);
}

bootstrap();
