import {Module} from "@nestjs/common";
import {WeatherController} from "./weather.controller";
import {weatherProviders} from "./weather.providers";
import {DatabaseModule} from "../database/database.module";
import {WeatherService} from "./weather.service";
import {HttpModule} from "@nestjs/axios";

@Module({
	imports: [DatabaseModule, HttpModule],
	providers: [...weatherProviders, WeatherService],
	controllers: [WeatherController],
	exports: [],
})
export class WeatherModule {}